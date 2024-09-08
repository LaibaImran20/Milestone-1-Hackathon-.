// Function to generate the resume
function generateResume(): void {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const work = (document.getElementById('work') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;

    (document.getElementById('resume-name') as HTMLParagraphElement).textContent = `Name: ${name}`;
    (document.getElementById('resume-email') as HTMLParagraphElement).textContent = `Email: ${email}`;
    (document.getElementById('resume-education') as HTMLParagraphElement).textContent = `Education: ${education}`;
    (document.getElementById('resume-work') as HTMLParagraphElement).textContent = `Work Experience: ${work}`;
    (document.getElementById('resume-skills') as HTMLParagraphElement).textContent = `Skills: ${skills}`;

    // Create a dummy unique URL for demo purposes
    const uniqueURL = 'username.vercel.app/resume';
    const resumeLink = document.getElementById('resumeLink') as HTMLAnchorElement;
    resumeLink.href = `http://${uniqueURL}`;
    resumeLink.textContent = `http://${uniqueURL}`;
    document.getElementById('shareLink')!.style.display = 'block';
    document.getElementById('resume')!.style.display = 'block';
}

// Function to download the resume as PDF
async function downloadPDF(): Promise<void> {
    const { jsPDF } = (window as any).jspdf;
    const doc = new jsPDF();

    doc.text((document.getElementById('resume-name') as HTMLParagraphElement).textContent || '', 10, 10);
    doc.text((document.getElementById('resume-email') as HTMLParagraphElement).textContent || '', 10, 20);
    doc.text((document.getElementById('resume-education') as HTMLParagraphElement).textContent || '', 10, 30);
    doc.text((document.getElementById('resume-work') as HTMLParagraphElement).textContent || '', 10, 40);
    doc.text((document.getElementById('resume-skills') as HTMLParagraphElement).textContent || '', 10, 50);

    doc.save('resume.pdf');
}

// Function to handle the sharing of the resume link
function shareResume(): void {
    alert('Resume link copied to clipboard (demo only)');
}

// Event listeners
document.getElementById('generateButton')!.addEventListener('click', generateResume);
document.getElementById('downloadButton')!.addEventListener('click', downloadPDF);
document.getElementById('shareButton')!.addEventListener('click', shareResume);
