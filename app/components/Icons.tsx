export function EmailIcon({ className }: { className?: string }) {
  return (
    <>
      <span className="sr-only">Email Icon</span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${className}`}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    </>
  );
}

export function PinIcon({ className }: { className?: string }) {
  return (
    <>
      <span className="sr-only">Locaiton Pin Icon</span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${className}`}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    </>
  );
}

export function PhoneIcon({ className }: { className?: string }) {
  return (
    <>
      <span className="sr-only">Phone Icon</span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${className}`}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
        />
      </svg>
    </>
  );
}

export function UpRightArrow({ className }: { className?: string }) {
  return (
    <>
      <span className="sr-only">Arrow Icon</span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`${className}`}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
      </svg>
    </>
  );
}

export function RightArrow({ className }: { className?: string }) {
  return (
    <>
      <span className="sr-only">Arrow Icon</span>
      <svg viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${className}`}>
        <path fillRule="evenodd" clipRule="evenodd" d="M22.1184 12.8046L4.52385e-05 12.8046L4.52829e-05 11.7884L22.1184 11.7884L11.492 1.21155L12.2035 0.499999L24 12.2965L12.2035 24.093L11.492 23.432L22.1184 12.8046Z" fill="current"/>
      </svg>
    </>
  );
}

export function TwitterIcon({ className }: { className?: string }) {
  return (
    <>
      <span className="sr-only">Twitter Icon</span>
      <svg viewBox="0 0 13 11" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={`${className}`}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12.2299 2.03828C11.7817 2.23816 11.3003 2.37322 10.7941 2.43426C11.3164 2.11974 11.7071 1.62473 11.8934 1.04158C11.4027 1.33491 10.8657 1.54139 10.3057 1.65203C9.92907 1.24733 9.43025 0.979094 8.88666 0.888958C8.34307 0.798822 7.78513 0.891831 7.29944 1.15354C6.81375 1.41526 6.42751 1.83103 6.20066 2.33632C5.97382 2.84161 5.91907 3.40813 6.04492 3.94794C5.05069 3.8977 4.07806 3.63762 3.19016 3.18457C2.30227 2.73152 1.51894 2.09563 0.891025 1.31817C0.676324 1.69092 0.552871 2.1231 0.552871 2.58336C0.552631 2.9977 0.654013 3.4057 0.84802 3.77115C1.04203 4.1366 1.32266 4.44821 1.66502 4.67832C1.26797 4.6656 0.879685 4.55762 0.532474 4.36337V4.39578C0.532434 4.97692 0.732164 5.54017 1.09777 5.98996C1.46338 6.43975 1.97235 6.74839 2.53832 6.86349C2.16999 6.96382 1.78383 6.97859 1.40899 6.90671C1.56867 7.40674 1.87972 7.844 2.29859 8.15727C2.71745 8.47054 3.22317 8.64414 3.74494 8.65377C2.85921 9.35357 1.76533 9.73317 0.639288 9.7315C0.439821 9.73155 0.240522 9.71983 0.0424194 9.69638C1.18542 10.436 2.51596 10.8286 3.87483 10.8271C8.4748 10.8271 10.9895 6.9926 10.9895 3.66703C10.9895 3.55899 10.9868 3.44987 10.982 3.34182C11.4711 2.98581 11.8933 2.54495 12.2288 2.0399L12.2299 2.03828V2.03828Z"
          fill="currentColor"
        />
      </svg>
    </>
  );
}

export function FacebookIcon({ className }: { className?: string }) {
  return (
    <>
      <span className="sr-only">Facebook Icon</span>
      <svg className={`${className}`} fill="currentColor" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    </>
  );
}

export function InstagramIcon({ className }: { className?: string }) {
  return (
    <>
      <span className="sr-only">Instagram Icon</span>

      <svg xmlns="http://www.w3.org/2000/svg" className={`${className}`} fill="currentColor" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clipRule="evenodd"
        />
      </svg>
    </>
  );
}

// linkedin icon svg typescript
export function LinkedinIcon({ className }: { className?: string }) {
  return (
    <>
      <span className="sr-only">LinkedIn Icon</span>

      <svg className={className} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
          clipRule="evenodd"
        />
      </svg>
    </>
  );
}

export function GithubIcon({ className }: { className?: string }) {
  return (
    <>
      <span className="sr-only">Github Icon</span>
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    </>
  );
}

export function DribbbleIcon({ className }: { className?: string }) {
  return (
    <>
      <span className="sr-only">Dribble Icon</span>
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
          clipRule="evenodd"
        />
      </svg>
    </>
  );
}

export function YouTubeIcon({ className }: { className?: string }) {
  return (
    <>
      <span className="sr-only">YouTube</span>
      <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
          clipRule="evenodd"
        />
      </svg>
    </>
  );
}

export function MenuIcon({ className }: { className?: string }) {
  return (
    <>
      <span className="sr-only">Menu</span>
      <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </>
  );
}

export function CloseIcon({ className }: { className?: string }) {
  return (
    <>
      <span className="sr-only">Close</span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </>
  );
}

export function PropellerLogoGreen({ className }: { className?: string }) {
  return (
    <>
      <svg className={className} fill="none" viewBox="0 0 850 1108.68" xmlns="http://www.w3.org/2000/svg">
        <path fill="#2D4E53" fillRule="evenodd" d="M385.148 892.852H248.789v215.828H0V0h385.148v892.852Z" clipRule="evenodd"></path><path fill="#2D4E53" d="M653.994 0H451.127v892.852h202.867V0ZM850 137.635H727.541v617.584H850V137.635Z"></path>
      </svg>
    </>
  );
}

export function CommunityIcon({ className }: { className?: string }) {
  return (
    <>
      <span className="sr-only">Community Icon</span>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="m4.74,6.38c.08,0,.15-.04.2-.11,1.58-2.35,4.23-3.75,7.06-3.75s5.48,1.41,7.06,3.75c.08.11.23.14.34.06.11-.08.14-.23.06-.34-1.67-2.48-4.47-3.96-7.46-3.96s-5.78,1.49-7.46,3.96c-.04.05-.05.12-.04.18.01.06.05.12.1.15.04.03.09.05.13.05h0Z"/><path d="m4.74,6.48h0c-.07,0-.13-.03-.19-.07-.07-.05-.13-.13-.14-.22-.02-.09,0-.18.05-.26,1.69-2.51,4.51-4.01,7.54-4.01s5.85,1.5,7.54,4.01c.05.07.07.16.06.25-.02.09-.07.17-.14.22-.07.05-.16.07-.25.06-.09-.02-.17-.07-.22-.14-1.57-2.32-4.18-3.71-6.98-3.71s-5.41,1.39-6.98,3.71c-.06.09-.17.15-.28.15Zm7.26-4.34c-2.96,0-5.72,1.46-7.37,3.92-.02.03-.03.07-.02.1,0,.04.03.07.06.09.03.02.05.03.08.03.05,0,.09-.02.11-.06,1.6-2.38,4.28-3.8,7.14-3.8s5.54,1.42,7.14,3.8c.02.03.05.05.09.06.04,0,.07,0,.1-.02.03-.02.05-.05.06-.09,0-.04,0-.07-.02-.1-1.66-2.46-4.41-3.92-7.38-3.92Z"/><path d="m9.04,8.83c0,1.2.72,2.27,1.83,2.73,1.11.46,2.38.2,3.22-.64.85-.85,1.1-2.12.64-3.22-.46-1.11-1.54-1.83-2.73-1.83-1.63,0-2.96,1.32-2.96,2.96h0Zm2.96,2.47c-1,0-1.9-.6-2.29-1.53-.38-.93-.17-1.99.54-2.7.71-.71,1.77-.92,2.7-.54.93.38,1.53,1.29,1.53,2.29,0,1.37-1.11,2.47-2.48,2.47h0Z"/><path d="m12,11.89c-.39,0-.79-.08-1.17-.23-1.15-.48-1.89-1.58-1.89-2.82h0c0-1.68,1.37-3.06,3.06-3.06,1.24,0,2.35.74,2.83,1.89.47,1.15.21,2.45-.66,3.33-.59.59-1.36.9-2.16.9Zm-2.86-3.06c0,1.16.69,2.19,1.76,2.64,1.07.44,2.29.2,3.11-.62.82-.82,1.06-2.04.62-3.11s-1.48-1.76-2.64-1.76c-1.57,0-2.86,1.28-2.86,2.86h0Zm2.86,2.57h0c-1.05,0-1.98-.62-2.38-1.59-.4-.97-.18-2.07.56-2.81.74-.74,1.84-.96,2.81-.56.97.4,1.59,1.34,1.59,2.38,0,1.42-1.16,2.57-2.58,2.57Zm0-4.96c-.62,0-1.22.24-1.68.7-.68.68-.89,1.7-.52,2.59.37.89,1.23,1.47,2.2,1.47,1.31,0,2.37-1.07,2.38-2.37,0-.97-.57-1.83-1.47-2.2-.3-.12-.61-.18-.91-.18Z"/><path d="m12,13.45c-3.12,0-5.66,3.71-5.66,8.26,0,.13.11.24.24.24s.24-.11.24-.24c0-4.29,2.32-7.78,5.18-7.78s5.18,3.49,5.18,7.78c0,.13.11.24.24.24s.24-.11.24-.24c0-4.55-2.54-8.26-5.66-8.26Z"/><path d="m17.42,22.06c-.19,0-.34-.15-.34-.34,0-4.24-2.28-7.68-5.08-7.68s-5.08,3.45-5.08,7.68c0,.19-.15.34-.34.34s-.34-.15-.34-.34c0-4.61,2.58-8.36,5.76-8.36s5.76,3.75,5.76,8.36c0,.19-.15.34-.34.34Zm-5.42-8.22c2.91,0,5.28,3.54,5.28,7.88,0,.08.06.14.14.14s.14-.06.14-.14c0-4.5-2.49-8.16-5.56-8.16s-5.56,3.66-5.56,8.16c0,.08.06.14.14.14s.14-.06.14-.14c0-4.35,2.37-7.88,5.28-7.88Z"/><path d="m5.57,12.24c.99,0,1.87-.59,2.25-1.5.38-.91.17-1.96-.53-2.65-.7-.7-1.75-.9-2.65-.52-.91.38-1.5,1.27-1.5,2.25,0,1.34,1.09,2.42,2.43,2.43h0Zm0-4.38c.79,0,1.5.47,1.81,1.2.3.73.14,1.57-.42,2.13-.56.56-1.4.73-2.13.42-.73-.3-1.21-1.01-1.21-1.8,0-1.08.88-1.95,1.95-1.95h0Z"/><path d="m5.57,12.34h0c-1.39,0-2.53-1.14-2.53-2.53,0-1.03.61-1.95,1.56-2.35.95-.4,2.04-.18,2.76.55.73.73.94,1.81.55,2.76-.4.95-1.31,1.56-2.34,1.56Zm0-.2h0c.95,0,1.79-.56,2.16-1.44.36-.88.16-1.88-.51-2.54-.67-.67-1.67-.87-2.55-.5-.88.36-1.44,1.21-1.44,2.16,0,1.28,1.05,2.32,2.33,2.33h0Zm0-.28c-.27,0-.53-.05-.79-.16-.77-.32-1.27-1.06-1.27-1.9,0-1.09.87-1.99,1.95-2.05h0s.1,0,.1,0h0c.83,0,1.58.5,1.9,1.27.32.77.15,1.65-.44,2.24-.39.39-.92.6-1.45.6Zm.1-3.91h0s-.1,0-.1,0c-1.02,0-1.85.83-1.85,1.85,0,.75.45,1.42,1.14,1.71.7.29,1.49.13,2.02-.4.53-.53.69-1.33.4-2.02-.28-.66-.9-1.1-1.61-1.14Z"/><path d="m7.95,14.77s.06-.11.06-.18c0-.06-.03-.12-.08-.16-.64-.58-1.48-.91-2.35-.93-2.54,0-4.61,3.01-4.61,6.71,0,.13.11.24.24.24s.24-.11.24-.24c0-3.44,1.85-6.24,4.13-6.24.75.02,1.48.3,2.04.81.1.09.25.08.34-.02h0Z"/><path d="m1.2,20.55c-.19,0-.34-.15-.34-.34,0-3.76,2.11-6.81,4.71-6.81.9.02,1.75.36,2.42.96.07.06.11.14.12.23,0,.09-.02.18-.08.25h0c-.13.14-.34.15-.48.03-.54-.49-1.24-.77-1.97-.79-2.22,0-4.03,2.75-4.03,6.14,0,.19-.15.34-.34.34Zm4.37-6.95c-2.48,0-4.51,2.97-4.51,6.61,0,.08.06.14.14.14s.14-.06.14-.14c0-3.5,1.9-6.34,4.23-6.34.78.01,1.53.31,2.1.84.06.05.14.05.2,0,.02-.03.04-.07.03-.1,0-.04-.02-.07-.05-.09-.63-.57-1.44-.89-2.29-.91Z"/><path d="m16,9.81c0,.98.59,1.87,1.5,2.24.91.38,1.95.17,2.65-.53.69-.7.9-1.74.53-2.65-.38-.91-1.26-1.5-2.25-1.5-1.34,0-2.43,1.09-2.43,2.43h0Zm.48,0c0-.79.47-1.5,1.2-1.81.73-.3,1.57-.14,2.13.42.56.56.73,1.4.43,2.13-.3.73-1.01,1.21-1.8,1.21-1.07,0-1.95-.87-1.95-1.95Z"/><path d="m18.43,12.34c-.33,0-.66-.06-.97-.19-.95-.39-1.56-1.31-1.56-2.34h0c0-1.4,1.14-2.53,2.53-2.53,1.03,0,1.94.61,2.34,1.56.39.95.18,2.03-.55,2.76-.48.49-1.13.74-1.79.74Zm-2.33-2.53c0,.95.57,1.79,1.44,2.15.88.36,1.87.16,2.54-.51.67-.67.87-1.67.5-2.54-.36-.87-1.21-1.44-2.15-1.44-1.29,0-2.33,1.05-2.33,2.33h0Zm2.33,2.05c-1.12,0-2.04-.92-2.05-2.05h0c0-.83.49-1.58,1.26-1.9.77-.32,1.65-.15,2.24.44.59.59.77,1.47.45,2.24-.32.77-1.06,1.27-1.9,1.27Zm-1.85-2.05c0,1.02.84,1.84,1.85,1.85.75,0,1.42-.45,1.71-1.14.29-.7.13-1.49-.4-2.02-.53-.53-1.33-.69-2.02-.4-.69.29-1.14.96-1.14,1.71h0Z"/><path d="m18.43,13.5c-.87.02-1.7.35-2.35.93-.05.04-.08.1-.09.16s.01.13.06.18c.04.05.1.08.17.08.06,0,.13-.02.18-.06.56-.51,1.28-.8,2.04-.81,2.28,0,4.13,2.8,4.13,6.24,0,.13.11.24.24.24s.24-.11.24-.24c0-3.71-2.07-6.72-4.61-6.72h0Z"/><path d="m22.8,20.56c-.19,0-.34-.15-.34-.34,0-3.38-1.81-6.14-4.03-6.14-.73.02-1.43.3-1.97.79-.07.06-.16.1-.25.09-.09,0-.18-.05-.24-.12-.06-.07-.09-.16-.08-.25,0-.09.05-.18.12-.23.66-.6,1.52-.94,2.41-.95h0c2.6,0,4.71,3.06,4.71,6.82,0,.19-.15.34-.34.34Zm-4.37-6.68c2.33,0,4.23,2.84,4.23,6.34,0,.08.06.14.14.14s.14-.06.14-.14c0-3.65-2.02-6.62-4.51-6.62-.85.02-1.66.34-2.28.91-.03.03-.05.06-.05.1,0,.04,0,.08.03.11s.06.04.1.05h0s.07-.01.09-.04c.58-.53,1.32-.82,2.1-.84Z"/>
      </svg>
    </>
  );
}

export function SpacesIcon({ className }: { className?: string }) {
  return (
    <>
      <span className="sr-only">Spaces Icon</span>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="m22.78,8.9h-8.15V1.22c0-.16-.13-.29-.29-.29H1.22c-.16,0-.29.13-.29.29v21.56c0,.16.13.29.29.29h21.56c.16,0,.29-.13.29-.29v-13.59c0-.16-.13-.29-.29-.29ZM8.43,1.51v3.46c0,.16.13.29.29.29s.29-.13.29-.29V1.51h5.05v7.68c0,.16.13.29.29.29h8.15v9.27h-5.81c-.16,0-.29.13-.29.29s.13.29.29.29h5.81v3.17h-13.49v-4.58h1.59c.16,0,.29-.13.29-.29s-.13-.29-.29-.29h-1.59v-3.93c0-.16-.13-.29-.29-.29s-.29.13-.29.29v6.74h-1.59c-.16,0-.29.13-.29.29s.13.29.29.29h1.59v1.77H1.51v-6.92h1.59c.16,0,.29-.13.29-.29s-.13-.29-.29-.29h-1.59V1.51h6.93Z"/><path d="m18.83,7.52s0,0,0,0,0,0,0,0c.05.05.13.08.2.08.04,0,.08,0,.11-.02.02-.01.04-.03.06-.05.01,0,.03,0,.03-.01l1.88-1.88c.05-.05.08-.13.08-.2s-.03-.15-.08-.2c-.11-.11-.29-.11-.41,0l-1.38,1.38V1.22c0-.16-.13-.29-.29-.29s-.29.13-.29.29v5.4l-1.38-1.38c-.11-.11-.29-.11-.41,0-.11.11-.11.29,0,.41l1.87,1.87Z"/>
      </svg>
    </>
  );
}

export function TickIcon({ className }: { className?: string }) {
  return (
    <>
      <span className="sr-only">Tick Icon</span>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M8.91933 18.0403C8.83027 18.0403 8.74214 18.0075 8.67278 17.9419L3.0731 12.6619C2.92872 12.5259 2.92122 12.2972 3.0581 12.1528C3.19497 12.0084 3.42278 12.0019 3.56716 12.1378L8.91652 17.1826L20.43 6.06102C20.5735 5.9232 20.8013 5.92696 20.9391 6.06946C21.0769 6.21289 21.0732 6.44071 20.9307 6.57852L9.17067 17.9382C9.10035 18.0066 9.01035 18.0404 8.91941 18.0404L8.91933 18.0403Z" fill="white" stroke="white"/>
      </svg>
    </>
  );
}
