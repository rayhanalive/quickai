const updateJsonUrl = "https://raw.githubusercontent.com/mahmudxyz00/quickai/main/update.json";
const currentVersionCode = 1;

window.onload = function() {
    checkForUpdates(false);
};

async function checkForUpdates(isManual) {
    try {
        let response = await fetch(updateJsonUrl);
        let data = await response.json();

        if (data.versionCode > currentVersionCode) {
            let userChoice = confirm(`⚡ Notun Version (${data.versionName}) Available!\n\nUpdate message: ${data.updateMessage}\n\nEkhoni update korben?`);
            if (userChoice) {
                window.location.href = data.apkUrl;
            }
        } else {
            if (isManual) {
                alert("Tomar app ti already latest version a ache!");
            }
        }
    } catch (error) {
        if (isManual) {
            alert("Update check korte shomossha hocche. Internet connection check korun.");
        }
    }
}

function manualCheckTest() {
    checkForUpdates(true);
}

function manualCheckUpdate() {
    checkForUpdates(true);
}
