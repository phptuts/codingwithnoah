/**
 * Represents the current state of the page
 */
var currentState = {
    section: 0,
    step: 0
};

// Document ready
document.addEventListener('DOMContentLoaded',function () {

    // Positions the title to align with the progress bar
    var left = document.querySelector("#progress-bar").offsetLeft

    var titleElement = document.querySelector("h1");
    titleElement.style.marginLeft = left + "px";

    // Starts the lesson on section 0 and step 0
    changeSection(0, 0);

}, false);

/**
 * Event occurs when the drop down navigation changes
 */
function onDropDownNavChange() {
    changeSection(document.querySelector("#nav-drop").value, 0);
}


/**
 * Changes the number of steps in the progress bar
 * Sets the step to 0
 * Changes the status of the navigation
 *
 * @param currentSection The current section the student is one
 * @param currentStep The step the user is on
 */
function changeSection(currentSection, currentStep) {

    currentStep = currentStep || 0;
    var sectionInfo = window.lesson['sections'][currentSection];
    var htmlStepProgress = '';

    var progressBar = document.querySelector("#progress-bar");


    sectionInfo.steps.forEach(function (step, index) {
        htmlStepProgress += '<span ';
        htmlStepProgress += 'onclick="changeStep(' + currentSection + ', '
            + index + ')"';
        if (index == 0) {
            htmlStepProgress += ' class="steps complete" >';
        } else {
            htmlStepProgress += ' class="steps" >';
        }

        htmlStepProgress += (index + 1) + '</span>'
    });

    progressBar.innerHTML  = htmlStepProgress;
    document.querySelector("#nav-drop").value =  currentSection;

    var sectionNavs = document.querySelectorAll(".section_nav")

    for (var i = 0; i < sectionNavs.length; i += 1) {
        if (i > currentSection) {
            sectionNavs[i].classList.remove("completed-nav");
        } else {
            sectionNavs[i].classList.add("completed-nav");
        }
    }

    changeStep(currentSection, currentStep);

}

/**
 * Controls status of the progress bar
 * Changes the picture and text area
 *
 * @param currentSection
 * @param currentStep
 */
function changeStep(currentSection, currentStep) {
    var step = window.lesson['sections'][currentSection].steps[currentStep];

    // updating the state
    currentState.step = currentStep;
    currentState.section = currentSection;


    // html elements
    var progressBar = document.querySelector("#progress-bar");
    var mainImage = document.querySelector("#main-image");
    var mainVideo = document.querySelector("#main-video");
    var previousStep = document.querySelector("#previous-step");
    var nextStep = document.querySelector("#next-step");

    // update the text
    document.querySelector("#step-text").innerText = step.text;

    // Updates the pictures and video
    if (step.type == 'image') {
        mainImage.style.display = 'block';
        mainImage.src = step.src;
        mainVideo.style.display = 'none';
        mainVideo.pause();
    } else if (step.type == 'video') {
        mainVideo.style.display = 'block';
        mainVideo.src = step.src;
        mainImage.style.display = 'none';
    }

    // Progress Bar
    var spans = document.querySelectorAll("#progress-bar > span");
    for (var i = 0; i < spans.length; i += 1) {
        if (i > currentStep) {
            spans[i].classList.remove("complete");
        } else {
            spans[i].classList.add("complete");
        }
    }

    // updating whether to display the progress bar
    if (window.lesson['sections'][currentState.section].steps.length == 1) {
        progressBar.style.display = 'none';
    } else {
        progressBar.style.display = 'flex';
    }


    // Updates the previous span button
    if (onFirstStep()) {
        previousStep.classList.add('has-none');
        previousStep.classList.remove('has-more');
    } else {
        previousStep.classList.add('has-more');
        previousStep.classList.remove('has-none');
    }

    // Updates the next span button
    if (onLastStep()) {
        nextStep.classList.add('has-none');
        nextStep.classList.remove('has-more');
    } else {
        nextStep.classList.add('has-more');
        nextStep.classList.remove('has-none');
    }


}

/**
 * Goes back one step
 */
function previousStep() {
    if (onFirstStep()) {
        return;
    }

    var section = (currentState.step - 1) < 0 ? currentState.section - 1 : currentState.section;

    var step = (currentState.step - 1) < 0 ?
        window.lesson['sections'][currentState.section - 1].steps.length - 1 : currentState.step - 1;

    if (section == currentState.section) {
        changeStep(section, step);
    } else {
        changeSection(section, step);
    }

}

/**
 * Goes to the last step
 */
function nextStep() {

    if (onLastStep()) {
        return;
    }

    var changeSections =
        (window.lesson['sections'][currentState.section].steps.length - 1) == currentState.step;

    if (changeSections) {
        changeSection(currentState.section + 1, 0);
    } else {
        changeStep(currentState.section, currentState.step + 1);
    }
}

/**
 * Returns true if on the last step
 * @return {boolean}
 */
function onLastStep() {

    var lastSection = window.lesson['sections'].length - 1;

    var lastStepOfSectionLastSection = window.lesson['sections'][lastSection].steps.length - 1;

    return lastSection == currentState.section && currentState.step == lastStepOfSectionLastSection;
}

/**
 * Returns true if on the first step
 *
 * @return {boolean}
 */
function onFirstStep() {
    return (currentState.step - 1) < 0 && currentState.section == 0;
}
