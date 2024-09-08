// Function to generate resume from form data
function generateResume(): void {
    // Get form data
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',')
        .map(skill => skill.trim())
        .join(', ');

    // Populate resume sections
    (document.getElementById('resume-name') as HTMLParagraphElement).textContent = `Name: ${name}`;
    (document.getElementById('resume-email') as HTMLParagraphElement).textContent = `Email: ${email}`;
    (document.getElementById('resume-phone') as HTMLParagraphElement).textContent = `Phone: ${phone}`;
    (document.getElementById('resume-address') as HTMLParagraphElement).textContent = `Address: ${address}`;
    (document.getElementById('resume-education') as HTMLParagraphElement).textContent = education;
    (document.getElementById('resume-work-experience') as HTMLParagraphElement).textContent = workExperience;
    (document.getElementById('resume-skills') as HTMLParagraphElement).textContent = skills;

    // Show the resume section
    document.getElementById('resume')!.classList.remove('hidden');
}

// Attach event listener to the button
document.getElementById('generateButton')?.addEventListener('click', generateResume);
