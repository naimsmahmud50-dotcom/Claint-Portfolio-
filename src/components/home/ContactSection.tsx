"use client";

import React, { useState } from "react";
import { useLanguage } from "../providers/LanguageProvider";
import { profileData } from "@/data/profile";
import {
  Mail,
  MessageSquare,
  Copy,
  Send,
  CheckCircle2,
  ExternalLink,
  Calendar,
  Globe,
  Clock,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { useToast } from "../providers/ToastProvider";
import { contactSchema } from "@/utils/contact-schema";

export function ContactSection() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    serviceType: "MS Excel Modeling & Formulas",
    budget: "Flexible / Discuss Scope First",
    timeline: "1 – 2 Weeks",
    message: "",
    honeypot: "", // Spam prevention honeypot
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [lastSubmittedData, setLastSubmittedData] = useState({
    name: "",
    email: "",
    subject: "",
    serviceType: "MS Excel Modeling & Formulas",
    budget: "Flexible / Discuss Scope First",
    timeline: "1 – 2 Weeks",
    message: "",
  });

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    toast(`Copied ${email} to clipboard!`, "success");
  };

  const handleCopyWhatsApp = () => {
    navigator.clipboard.writeText(profileData.contacts.whatsappDisplay);
    toast("WhatsApp number copied to clipboard!", "success");
  };

  const getWhatsAppUrl = (data: any = formData) => {
    const parts = [
      `👋 *New Inquiry for Eyakub Mahmud*`,
      ``,
      `*Client:* ${data.name?.trim() || "Visitor"}`,
      `*Email:* ${data.email?.trim() || "Not provided"}`,
      `*Service:* ${data.serviceType || "MS Office & Practical Accounting"}`,
      `*Budget:* ${data.budget || "Flexible"}`,
      `*Timeline:* ${data.timeline || "Flexible"}`,
      `*Subject:* ${data.subject?.trim() || "Project Consultation"}`,
      ``,
      `*Message:*`,
      data.message?.trim() || "Hello Eyakub, I visited your portfolio and would like to connect.",
    ];
    return `https://wa.me/${profileData.contacts.whatsappNumber}?text=${encodeURIComponent(parts.join("\n"))}`;
  };

  const getMailtoUrl = (data: any = formData) => {
    const name = data.name?.trim() || "Client";
    const email = data.email?.trim() || "Not provided";
    const subject = encodeURIComponent(
      `[Portfolio Lead] ${data.subject?.trim() || "Project Inquiry"} (${data.budget || "Flexible"}) - ${name}`
    );
    const body = encodeURIComponent(
      `Hello Eyakub,\n\n${data.message?.trim() || ""}\n\n---\nClient Name: ${name}\nReply-To Email: ${email}\nService Required: ${data.serviceType || "MS Office & Accounting Consultation"}\nBudget Tier: ${data.budget || "Flexible"}\nTarget Timeline: ${data.timeline || "Flexible"}\nSent via Portfolio Contact Dialogue`
    );
    return `mailto:${profileData.contacts.primaryEmail}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validation = contactSchema.safeParse(formData);
    if (!validation.success) {
      const firstIssue = validation.error.issues[0];
      toast(firstIssue ? firstIssue.message : "Please check your form entries.", "error");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const responseData = await res.json().catch(() => ({}));

      if (res.status === 429) {
        toast("Rate limit reached. Please wait a few minutes before submitting another message.", "error");
        return;
      }

      if (!res.ok) {
        throw new Error(responseData.error || "Failed to send message");
      }

      setLastSubmittedData({ ...formData });
      setSubmitted(true);
      toast("Message dispatched to Eyakub's inbox! Thank you — I'll get back to you as soon as possible.", "success");
    } catch {
      setLastSubmittedData({ ...formData });
      setSubmitted(true);
      toast("Message prepared! You can also ping Eyakub directly via WhatsApp or Email.", "info");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-electric-950/70 border border-electric-500/20 text-xs font-mono text-cyan mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>10 // INITIATE DIALOGUE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100">
            {t.contact.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
            {t.contact.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Channels & Fast Actions (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Email Card */}
            <div className="p-6 rounded-2xl tech-card flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-cyan">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-cyan bg-cyan/10 border border-cyan/30 px-2 py-0.5 rounded font-bold">
                    {t.contact.primaryEmailLabel}
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-slate-100">{t.contact.primaryEmailDesc}</h4>
                <p className="text-xs sm:text-sm font-mono text-slate-200 mt-1 select-all">
                  {profileData.contacts.primaryEmail}
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between">
                <a
                  href={`mailto:${profileData.contacts.primaryEmail}`}
                  className="text-xs font-semibold text-cyan hover:text-white transition-colors"
                >
                  Send Direct Mail &rarr;
                </a>
                <button
                  onClick={() => handleCopyEmail(profileData.contacts.primaryEmail)}
                  className="p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                  title="Copy email"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Secondary Email Card */}
            <div className="p-6 rounded-2xl tech-card flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-electric-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-300 bg-slate-850 px-2 py-0.5 rounded font-semibold border border-slate-700">
                    {t.contact.secondaryEmailLabel}
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-slate-100">{t.contact.secondaryEmailDesc}</h4>
                <p className="text-xs sm:text-sm font-mono text-slate-200 mt-1 select-all">
                  {profileData.contacts.secondaryEmail}
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between">
                <a
                  href={`mailto:${profileData.contacts.secondaryEmail}`}
                  className="text-xs font-semibold text-electric-400 hover:text-white transition-colors"
                >
                  Send Direct Mail &rarr;
                </a>
                <button
                  onClick={() => handleCopyEmail(profileData.contacts.secondaryEmail)}
                  className="p-1.5 text-slate-400 hover:text-slate-100 rounded-lg hover:bg-slate-800 transition-colors"
                  title="Copy secondary email"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-950/40 via-slate-900 to-slate-950 border border-emerald-500/30 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-emerald-300 bg-emerald-950 border border-emerald-500/30 px-2 py-0.5 rounded font-bold">
                    {t.contact.whatsappLabel}
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-slate-100">{t.contact.whatsappDesc}</h4>
                <p className="text-xs sm:text-sm font-mono text-emerald-300 mt-1">
                  +880 1877-508893 <span className="text-[11px] text-slate-400 font-sans">({profileData.contacts.whatsappDisplay})</span>
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <span>Open WhatsApp Chat</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  type="button"
                  onClick={handleCopyWhatsApp}
                  className="p-1.5 text-slate-400 hover:text-slate-100 rounded-lg hover:bg-slate-800 transition-colors"
                  title="Copy WhatsApp number"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* 15-Minute Strategy Discovery Session Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-950/40 via-slate-900 to-slate-950 border border-cyan-500/30 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-cyan bg-cyan-950 border border-cyan-500/30 px-2 py-0.5 rounded font-bold">
                    {t.contact.callLabel}
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-slate-100">{t.contact.callTitle}</h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  {t.contact.callDesc}
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-800/80">
                <button
                  type="button"
                  onClick={() => {
                    if (typeof window !== "undefined") {
                      window.dispatchEvent(
                        new CustomEvent("open-discovery-modal", {
                          detail: { sprint: "15-Min Strategy Discovery Session" },
                        })
                      );
                    }
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-electric-600 to-cyan hover:from-electric-500 hover:to-cyan/90 text-white font-semibold text-xs transition-all shadow-md shadow-cyan/20 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{t.contact.callButton}</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
                </button>
              </div>
            </div>

            {/* Worldwide Enterprise Remote SLA & Availability Card */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/90 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan">
                <Globe className="w-4 h-4 text-cyan" />
                <span>{t.contact.globalEngagementTitle}</span>
              </div>
              <div className="space-y-2 text-xs text-slate-300 leading-relaxed">
                <div className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{t.contact.globalEngagementDesc}</span>
                </div>
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan shrink-0 mt-0.5" />
                  <span><strong>{t.contact.responseGuarantee}</strong> {t.contact.responseGuaranteeDesc}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl tech-card border-electric-500/25">
              
              {submitted ? (
                <div className="py-10 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-950 border border-emerald-500/40 flex items-center justify-center mb-4 text-emerald-400 animate-in zoom-in">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-100">{t.contact.success.title}</h3>
                  <p className="mt-2 text-sm text-slate-300 max-w-md">
                    {t.contact.success.desc} (<span className="text-cyan font-mono">{profileData.contacts.primaryEmail}</span>).
                  </p>

                  {/* Submission Summary Preview */}
                  {lastSubmittedData.name && (
                    <div className="w-full max-w-md mt-6 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-left text-xs space-y-1.5 font-mono">
                      <div className="flex justify-between text-slate-400 border-b border-slate-800/80 pb-1.5 mb-2">
                        <span>{t.contact.success.summary}</span>
                        <span className="text-emerald-400 flex items-center gap-1 font-sans">
                          <CheckCircle2 className="w-3 h-3" /> {t.contact.success.statusQueued}
                        </span>
                      </div>
                      <p className="text-slate-200"><span className="text-slate-400">{t.contact.success.client}</span> {lastSubmittedData.name}</p>
                      <p className="text-slate-200"><span className="text-slate-400">{t.contact.success.email}</span> {lastSubmittedData.email}</p>
                      <p className="text-slate-200"><span className="text-slate-400">{t.contact.success.service}</span> {lastSubmittedData.serviceType}</p>
                      <p className="text-slate-200"><span className="text-slate-400">{t.contact.success.budget}</span> {lastSubmittedData.budget}</p>
                      <p className="text-slate-200"><span className="text-slate-400">{t.contact.success.timeline}</span> {lastSubmittedData.timeline}</p>
                      <p className="text-slate-200 truncate"><span className="text-slate-400">{t.contact.success.subject}</span> {lastSubmittedData.subject}</p>
                    </div>
                  )}

                  {/* Instant Follow-up Actions */}
                  <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={getWhatsAppUrl(lastSubmittedData)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-semibold text-xs shadow-md shadow-emerald-950/50 transition-all hover:scale-[1.02]"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>{t.contact.success.whatsappButton}</span>
                    </a>
                    <a
                      href={getMailtoUrl(lastSubmittedData)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-600 text-xs text-slate-200 hover:text-white transition-all"
                    >
                      <Mail className="w-4 h-4" />
                      <span>{t.contact.success.mailButton}</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          subject: "",
                          serviceType: "AI Automation",
                          budget: "$1,000 – $3,000 (Sprint)",
                          timeline: "1 – 2 Weeks",
                          message: "",
                          honeypot: "",
                        });
                      }}
                      className="px-4 py-2.5 rounded-xl bg-slate-900/50 hover:bg-slate-800 text-xs text-slate-400 hover:text-slate-200 transition-colors"
                    >
                      {t.contact.success.anotherButton}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Invisible Honeypot Field */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="hp_field">Do not fill this</label>
                    <input
                      id="hp_field"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.honeypot}
                      onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-mono text-slate-300 mb-1.5 font-semibold">
                        {t.contact.form.name}
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={t.contact.form.namePlaceholder}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 focus:border-cyan text-sm text-slate-100 placeholder:text-slate-400 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-mono text-slate-300 mb-1.5 font-semibold">
                        {t.contact.form.email}
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={t.contact.form.emailPlaceholder}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 focus:border-cyan text-sm text-slate-100 placeholder:text-slate-400 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-subject" className="block text-xs font-mono text-slate-300 mb-1.5 font-semibold">
                        {t.contact.form.subject}
                      </label>
                      <input
                        id="contact-subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder={t.contact.form.subjectPlaceholder}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 focus:border-cyan text-sm text-slate-100 placeholder:text-slate-400 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-service-type" className="block text-xs font-mono text-slate-300 mb-1.5 font-semibold">
                        {t.contact.form.serviceType}
                      </label>
                      <select
                        id="contact-service-type"
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 focus:border-cyan text-sm text-slate-100 outline-none transition-all"
                      >
                        {t.contact.form.options.serviceType.map((option: any) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-budget" className="block text-xs font-mono text-slate-300 mb-1.5 font-semibold">
                        {t.contact.form.budget}
                      </label>
                      <select
                        id="contact-budget"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 focus:border-cyan text-sm text-slate-100 outline-none transition-all"
                      >
                        {t.contact.form.options.budget.map((option: any) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="contact-timeline" className="block text-xs font-mono text-slate-300 mb-1.5 font-semibold">
                        {t.contact.form.timeline}
                      </label>
                      <select
                        id="contact-timeline"
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 focus:border-cyan text-sm text-slate-100 outline-none transition-all"
                      >
                        {t.contact.form.options.timeline.map((option: any) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono text-slate-300 mb-1.5 font-semibold">
                      {t.contact.form.message}
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t.contact.form.messagePlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 focus:border-cyan text-sm text-slate-100 placeholder:text-slate-400 outline-none transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-electric-600 to-cyan text-white font-semibold text-sm shadow-lg shadow-electric-600/30 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 transition-all"
                    >
                      {loading ? (
                        <span>{t.contact.form.sending}</span>
                      ) : (
                        <>
                          <span>{t.contact.form.submit}</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-mono text-emerald-400 hover:text-emerald-300 py-2 transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>{t.contact.form.whatsappLink}</span>
                    </a>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
