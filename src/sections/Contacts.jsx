import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "egellejones@gmail.com",
    href: "mailto:egellejones@gmail.com.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+234 (902) 442-3438",
    href: "tel:+2349024423438",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lagos, NG",
    href: "#",
  },
];

export const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null, //success or error
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICEID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATEID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLICKEY;
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration missing, Please check your environment variable",
        );
      }
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I will get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error("EmailJS error", error);
      setSubmitStatus({
        type: "error",
        message: error.text || "Failed to send message. Please try again later",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section id="contacts" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Let's build{" "}
            <span className="font-serif italic font-normal text-white">
              something great.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Have a project in mind? I'd love to hear about it. Send me a message
            and let's discuss how we can work together.
          </p>
        </div>
        <div className=" grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="p-8 glass rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
            <form action="submit" className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name..."
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:right-1 focus:ring-primary outline-none  transition-all"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="text"
                  placeholder="your@email.com."
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:right-1 focus:ring-primary outline-none transition-all"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Send message"
                  id="message"
                  type="text"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:right-1 focus:ring-primary outline-none transition-all resize-none"
                />
              </div>

              <Button
                className={`w-full ${isLoading ? "bg-primary/50" : ""}`}
                type="submit"
                disabled={isLoading}
                size="lg"
              >
                {isLoading ? (
                  <>Loading...</>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </Button>

              {submitStatus.type && (
                <div
                  className={` flex items-center gap-3 p-4 rounded-xl ${submitStatus.type === "success" ? "bg-green-500/10 border border-green-500/20 text-green-400" : "bg-red-500/10 border border-red-500/20 text-red-400"}`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 flex-shrink" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink" />
                  )}
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>

          <div className="space-y-6 animate-fade-in animation-delay-400">
            <div className="glass rounded-3xl p-8 ">
              <h3 className="text-xl font-semibold mb-6"></h3>

              <div className="space-y-4">
                {contactInfo.map((contact, idx) => (
                  <a
                    key={idx}
                    href={contact.href}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      {" "}
                      <contact.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-muted-foreground text-sm ">
                        {contact.label}
                      </div>
                      <div className="font-medium">{contact.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            {/* Availability Card */}
            <div className="glass rounded-3xl p-8 border border-primary/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium">Currently Available</span>
              </div>
              <p className="text-muted-foreground text-sm">
                I'm currently open to new opportunities and exciting projects.
                Whether you need a full-time engineer or a freelance consultant,
                let's talk!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
