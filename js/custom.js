// creating the Feedback Email button auxiliary to the Search box in the header
document.addEventListener('DOMContentLoaded', function() {
    const ellipsisContainer = document.querySelector('.md-search');
    if (ellipsisContainer) {
        const mailtoLink = document.createElement('a');
        mailtoLink.href = '#';
        mailtoLink.classList.add('custom-email-link');

        // Create a text node saying 'Feedback''
        const textNode = document.createTextNode('Feedback');

        // Create an icon element
        const icon = document.createElement('i');
        icon.classList.add('fa-regular', 'fa-envelope');
        icon.setAttribute('aria-hidden', 'true');

        // Append the icon and text node to the link element
        mailtoLink.appendChild(icon);
        mailtoLink.appendChild(textNode);

        mailtoLink.addEventListener('click', function(event) {
            event.preventDefault();
            const subject = 'HAMK New BYOD feedback';
            const body = `I have some feedback about the page titled: ${document.title} at the URL: ${window.location.href}`;
            const mailtoURL = `mailto:firstname.lastname@hamk.fi?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.location.href = mailtoURL;
        });
        ellipsisContainer.appendChild(mailtoLink);
    }
});
