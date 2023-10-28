# Mail
**Mail, refined**

*Mail* reimagines email services by combining the simplicity of Arc Browser with the customization capabilities of Shadcn UI. Our approach simplifies your inbox, sharpens email composition with AI-powered *Pre-send* analysis, and enhances personal expression through extensive UI customization. We introduce a revolutionary Kanban-style interface for managing emails like tasks on a to-do list, making your email interactions smoother and more intuitive. Exciting features like *Spicy Mails* and versatile Markdown/HTML mail editors infuse creativity and thoughtfulness into everyday communication. Embrace a modern, user-centric email service that evolves to meet your changing needs.

## Key Features
- **`Pre-send`**: Our AI examines your email's grammar, tone, and overall message before sending, ensuring your communication is on point.
- **`Spicy Mails`**: Ever sent an email in the heat of the moment and regretted it later? *Spicy Mails* helps by analyzing the emotional tone of your outgoing emails. If it detects high emotion, it suggests postponing the email for an hour to let you reconsider, even softening the tone if needed.
- **`Personalized UI`**: Tired of the same old email interface? With *Mail*, personalize your experience with a choice of colors, fonts, spacing, and more to suit your style.
- **`Write Better Mails`**: Compose using Markdown, HTML, or even React. Save and reuse templates for consistent, professional emails.

## Motivations
### Streamlining User Interface
Both Gmail and Outlook often feel cluttered and overly complex for day-to-day email needs. In contrast, my project focuses on a cleaner, more user-friendly UI. Drawing inspiration from the user-focused design of Arc Browser and the adaptable themes of Shadcn UI, I aimed to empower users to customize their own digital space. I believe in...

### Reimagining Email for Modern Use
Email has been around for decades, yet most services still offer the same old interface. In today's world, our use of email has evolved. Hence, I redesigned the UI to reflect these changes. Viewing emails as tasks on a to-do list and organizing them using a Kanban-style layout, this new approach aligns with how we interact with emails: as items to address, respond to, or monitor. The UX draws inspiration from Kanban methods, offering intuitive drag-and-drop categorization.

### Rethinking the Email Writing Process
Typically, my email writing process involves drafting, seeking improvements or corrections from chatGPT, making comparisons and edits, and performing a final grammar check before sending. Recognizing the complexity and length of this routine, I've incorporated a "Pre-send" feature. This tool not only performs the aforementioned tasks in one go but also checks for forgotten attachments, streamlining the entire process.

### Personalized Email Address
Having my own domain, I was keen to link it with a customized email address. This desire sparked the creation of *Mail*.

## Inspirations
- **Arc**: Renowned for offering the best user experience in the market.
- **IntelliJ IDEA**: Admired for their compact and clear user interface.

## Release Roadmap
1. [ ] **`v0.1.0`**: Set up the project with create-next-app
2. [ ] **`v0.2.0`**: Implement account creation and email assignment
3. [ ] **`v0.3.0`**: Develop initial UI
4. [ ] **`v0.4.0`**: Enable sending and receiving emails
5. [ ] **`v0.5.0`**: Launch /discover promotional page
6. [ ] **`v0.6.0`**: Introduce theme configuration
7. [ ] **`v0.7.0`**: Integrate ChatGPT
8. [ ] **`v0.8.0`**: Add Markdown/HTML mail editor
9. [ ] **`v0.9.0`**: Implement attachment preview
10. [ ] **`v1.0.0`**: Finalize app

## Funding
> This project exploits free tiers of multiple services.
If this project gains in popularity and goes above those free tiers, I will need funding to keep this project going!

## Installation
*Instructions coming soon.*

## Tech Stack
### Frontend
- **Deployment**: [Vercel](https://vercel.com/) - For its power and simplicity.
- **Framework**: [Next.js](https://nextjs.org/) - Provides a comprehensive framework for scalable React projects.
- **Bundler**: [TurboPack](https://turbo.build/pack) - Faster and more optimized bundler.
- **Package manager**: [pMPM](https://pnpm.io/) - Enhances runtime efficiency.
- **Mail API (Sending)**: [Resend](https://resend.com/home) - The best Email API out here developed by an amazing team.
- **Mail API (Receiving)**: [Mail](https://idontknowyet.idk) - To be found (emailjs ?)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Enables quick and flexible styling.
- **Component Library**: [ui.shadcn.com](https://ui.shadcn.com/) - Facilitates theme customization and upholds strong UI principles.
- **Testing**: [Cypress](https://www.cypress.io/) - Helps writing good e2e tests.

### Backend
- **Cloud hosting**: [DigitalOcean]() or [Azure]() - Free credits for students
- **SMTP and IMAP**: [Poste.io]() or [Mail-in-a-Box]() - Fast setup and open source 

## Contributing
Given the complexity and scope of this project, every contribution is valued and appreciated.

## License
This project is licensed under the [MIT License](/LICENSE).