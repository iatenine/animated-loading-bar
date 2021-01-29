let finished = false;

const simulateDownload = (progress) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(progress + 1);
        }, 50);
    }).then(res => res);
}

document.querySelector('.download-button').onclick = () => {
    if(finished == true)
        location.reload()
    document.querySelector('.progress-button').classList.add('in-progress');

    const documentStyles = document.documentElement.style;
    const percentage = document.querySelector('.percentage');
    const progressButton = document.querySelector('.progress-button');
    const loadingText = document.querySelector('.loading-text');
    const buttonText = document.querySelector('.button-text');

    progressButton.classList.add('in-progress');

    (async() => {
        let progress = 0;

        while (progress < 100) {
            progress = await simulateDownload(progress);

            if(progress % 2 === 0){
                documentStyles.setProperty('--progress', `${progress}%`)
            }

            percentage.innerText = `${progress}`;
        }

        finished = true;
        buttonText.innerText = 'Restart?';
        setTimeout(() => progressButton.classList.replace('in-progress', 'finished'), 1000);
    })();
}