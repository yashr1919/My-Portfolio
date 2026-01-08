import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Have an interest to talk or want to collaborate? Feel free to reach
          out. I'm always open to discussing new oportunities.
        </p>

        {/* Contact Info Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="p-4 rounded-full bg-primary/10">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h4 className="font-medium">Email</h4>
            <a
              href="mailto:yash2407.rkl@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              yash2407.rkl@gmail.com
            </a>
          </div>

          <div className="flex flex-col items-center text-center space-y-3">
            <div className="p-4 rounded-full bg-primary/10">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <h4 className="font-medium">Phone</h4>
            <a
              href="tel:+917978666571"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              +91 7978666571
            </a>
          </div>

          <div className="flex flex-col items-center text-center space-y-3">
            <div className="p-4 rounded-full bg-primary/10">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <h4 className="font-medium">Location</h4>
            <span className="text-muted-foreground">
              Bhubaneswar, Odisha
            </span>
          </div>
        </div>

        {/* Connect With Me (Centered) */}
        <div className="flex flex-col items-center text-center space-y-6">
          <h4 className="font-medium text-lg">Connect With Me</h4>
          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/yash-wardhan07"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
