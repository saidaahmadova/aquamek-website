export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/994505154130?text=Salam%2C%20Aquamek%20filtrl%C9%99ri%20haqq%C4%B1nda%20m%C9%99lumat%20almaq%20ist%C9%99yir%C9%99m"
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp ilə yazın"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-3 text-sm font-semibold text-whatsapp-foreground shadow-float transition-transform hover:scale-105"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
        <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.2-1.36a9.9 9.9 0 0 0 4.84 1.24h.01c5.5 0 9.96-4.46 9.96-9.96 0-2.66-1.04-5.16-2.92-7.04A9.9 9.9 0 0 0 12.04 2Zm0 18.16c-1.5 0-2.98-.4-4.26-1.16l-.3-.18-3.08.8.82-3-.2-.32a8.2 8.2 0 0 1-1.26-4.38c0-4.56 3.72-8.28 8.29-8.28 2.21 0 4.29.86 5.85 2.43a8.2 8.2 0 0 1 2.42 5.86c0 4.57-3.72 8.23-8.28 8.23Zm4.54-6.16c-.25-.13-1.47-.72-1.7-.8-.23-.09-.4-.13-.56.12-.17.25-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.4-.41-.56-.42h-.47c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07s.89 2.4 1.02 2.56c.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.47-.07 1.47-.6 1.68-1.19.21-.58.21-1.08.14-1.18-.06-.11-.23-.17-.48-.29Z" />
      </svg>
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}