"use client";

import { useCallback, useState } from "react";
import { useTranslations } from "next-intl";
import { globeState } from "@/lib/globeState";

const networkNodes = [
  {
    icon: "public",
    label: "GitHub",
    caption: "// github.com/divyanshf",
    href: "https://github.com/divyanshf",
  },
  {
    icon: "work",
    label: "LinkedIn",
    caption: "// linkedin.com/in/divyanshf",
    href: "https://www.linkedin.com/in/divyanshf/",
  },
  {
    icon: "alternate_email",
    label: "Email",
    caption: "// divyanshfofficial@gmail.com",
    href: "mailto:divyanshfofficial@gmail.com",
  },
];

type FormState = "idle" | "loading" | "success" | "error";

export const ContactSection = () => {
  const t = useTranslations("contact");
  const ft = useTranslations("contact.form");

  const setBannerRef = useCallback((el: HTMLDivElement | null) => {
    globeState.setBanner(el);
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const submit = async () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMsg(ft("errorRequired"));
      setStatus("error");
      return;
    }
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data.error ?? ft("errorGeneric"));
        setStatus("error");
      } else {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch {
      setErrorMsg(ft("errorNetwork"));
      setStatus("error");
    }
  };

  return (
    <section
      id='contact'
      className='relative w-full pt-32 md:pt-40 pb-0 scroll-mt-20 overflow-hidden'
    >
      <div className='relative z-10 max-w-[var(--container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]'>
        <header data-animate className='mb-16 text-center max-w-3xl mx-auto'>
          <span className='font-[family-name:var(--font-mono)] text-[12px] tracking-[0.22em] uppercase text-secondary'>
            {t("kicker")}
          </span>
          <h2 className='font-[family-name:var(--font-headline)] text-[44px] md:text-[72px] font-bold leading-[1.05] tracking-[-0.04em] mt-4 mb-6'>
            {t("titleStart")}{" "}
            <span className='text-gradient-animate'>{t("titleHighlight")}</span>
          </h2>
          <p className='font-[family-name:var(--font-body)] text-[16px] leading-[1.65] text-on-surface-variant'>
            {t("description")}
          </p>
        </header>
      </div>

      <div className='relative z-10'>
        <div className='max-w-[var(--container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]'>
          <div className='relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16'>
            <div className='hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/40 to-secondary/0' />

            <form
              data-animate
              className='glass-panel rounded-lg p-6 md:p-8 flex flex-col gap-6'
              onSubmit={(e) => {
                e.preventDefault();
                submit();
              }}
            >
              <p className='font-[family-name:var(--font-mono)] text-[12px] tracking-[0.18em] uppercase text-primary'>
                {status === "success" ? ft("transmissionReceived") : ft("systemReady")}
              </p>

              {status === "success" ? (
                <div className='flex flex-col items-center gap-3 py-8 text-center'>
                  <span className='material-symbols-outlined text-primary text-[48px]'>
                    check_circle
                  </span>
                  <p className='font-[family-name:var(--font-body)] text-[15px] text-on-surface-variant'>
                    {ft("success")}
                  </p>
                </div>
              ) : (
                <>
                  <label className='flex flex-col gap-2'>
                    <span className='font-[family-name:var(--font-mono)] text-[11px] tracking-[0.2em] uppercase text-on-surface-variant'>
                      {ft("nameLabel")}
                    </span>
                    <input
                      type='text'
                      placeholder={ft("namePlaceholder")}
                      className='input-glow w-full'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      disabled={status === "loading"}
                    />
                  </label>

                  <label className='flex flex-col gap-2'>
                    <span className='font-[family-name:var(--font-mono)] text-[11px] tracking-[0.2em] uppercase text-on-surface-variant'>
                      {ft("emailLabel")}
                    </span>
                    <input
                      type='email'
                      placeholder={ft("emailPlaceholder")}
                      className='input-glow w-full'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={status === "loading"}
                    />
                  </label>

                  <label className='flex flex-col gap-2'>
                    <span className='font-[family-name:var(--font-mono)] text-[11px] tracking-[0.2em] uppercase text-on-surface-variant'>
                      {ft("messageLabel")}
                    </span>
                    <textarea
                      placeholder={ft("messagePlaceholder")}
                      rows={4}
                      className='input-glow w-full resize-none'
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      disabled={status === "loading"}
                    />
                  </label>

                  {status === "error" && (
                    <p className='font-[family-name:var(--font-mono)] text-[11px] tracking-[0.14em] uppercase text-red-400'>
                      &gt; Error: {errorMsg}
                    </p>
                  )}

                  <button
                    type='submit'
                    disabled={status === "loading"}
                    className='self-start mt-2 inline-flex items-center gap-2 bg-primary text-on-primary font-[family-name:var(--font-mono)] text-[12px] tracking-[0.22em] uppercase px-7 py-3 rounded btn-primary-glow transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed'
                  >
                    {status === "loading" ? ft("transmitting") : ft("submit")}
                    <span className='material-symbols-outlined text-[18px]'>
                      {status === "loading" ? "hourglass_top" : "send"}
                    </span>
                  </button>
                </>
              )}
            </form>

            <div data-animate data-animate-delay='0.15' className='flex flex-col gap-8'>
              <div>
                <h3 className='font-[family-name:var(--font-mono)] text-[11px] tracking-[0.22em] uppercase text-secondary mb-4'>
                  {t("networkNodesTitle")}
                </h3>
                <ul className='space-y-4'>
                  {networkNodes.map((node) => (
                    <li key={node.label}>
                      <a
                        href={node.href}
                        target='_blank'
                        rel='noreferrer noopener'
                        className='glass-panel glass-panel-hover group flex items-center gap-4 rounded-lg p-4 md:p-5'
                      >
                        <span className='material-symbols-outlined text-primary text-[28px]'>
                          {node.icon}
                        </span>
                        <span className='flex flex-col flex-1'>
                          <span className='font-[family-name:var(--font-headline)] text-lg font-semibold'>
                            {node.label}
                          </span>
                          <span className='font-[family-name:var(--font-mono)] text-[11px] tracking-[0.16em] uppercase text-on-surface-variant'>
                            {node.caption}
                          </span>
                        </span>
                        <span className='material-symbols-outlined text-on-surface-variant group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300'>
                          arrow_outward
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3
                  id='direct-coordinates'
                  className='font-[family-name:var(--font-mono)] text-[11px] tracking-[0.22em] uppercase text-secondary mb-4'
                >
                  {t("coordinatesTitle")}
                </h3>
                <div className='glass-panel rounded-lg p-5 space-y-3'>
                  <div
                    id='coord-tokyo'
                    className='flex items-center gap-3 relative'
                  >
                    <span className='material-symbols-outlined text-primary text-[20px]'>
                      location_on
                    </span>
                    <span className='font-[family-name:var(--font-body)] text-[14px] text-on-surface-variant'>
                      {t("location")}
                    </span>
                    <span
                      aria-hidden
                      className='ml-auto inline-flex items-center justify-center w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(0,219,233,0.9)] animate-pulse'
                    />
                  </div>
                  <div className='flex items-center gap-3'>
                    <span className='material-symbols-outlined text-primary text-[20px]'>
                      schedule
                    </span>
                    <span className='font-[family-name:var(--font-mono)] text-[12px] tracking-[0.14em] uppercase text-on-surface-variant'>
                      {t("timezone")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={setBannerRef}
          className='relative w-full h-[260px] sm:h-[340px] md:h-[440px]'
        >
          <div
            aria-hidden
            className='pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-surface-container-lowest/40'
          />
        </div>
      </div>
    </section>
  );
};
