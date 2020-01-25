#!/usr/bin/env bash
set -eou pipefail


cd "$(dirname "$0")" || exit 1

export VIRTUAL_ENV_DISABLE_PROMPT=1

if ! ssh -o PasswordAuthentication=no -o BatchMode=yes pi@smarterhome.local exit &>/dev/null; then
    echo -e "Need passwordless ssh:\n\n    ssh-copy-id pi@smarterhome.local\n"
    exit 1
fi

pushd MetaHassConfig >/dev/null 2>&1 || exit 1
    if [ ! -d venv ]; then
        python3 -m pip install virtualenv
        virtualenv venv
    fi
    # shellcheck disable=SC1091
    source ./venv/bin/activate
        pushd ../HomeAssistantConfig >/dev/null 2>&1 || exit 1
            hassmetagen ./metaconfig.yaml
        popd >/dev/null 2>&1 || exit 1
    deactivate
popd >/dev/null 2>&1 || exit 1

./check-hass-configs.sh

pushd HomeAssistantConfig >/dev/null 2>&1 || exit 1
    scp ./automations.yaml pi@smarterhome.local:/home/pi/repo/HomeAssistantConfig/
    scp ./scenes.yaml pi@smarterhome.local:/home/pi/repo/HomeAssistantConfig/
popd >/dev/null 2>&1 || exit 1
