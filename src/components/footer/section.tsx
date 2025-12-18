export default function Footer() {
  return (
    <footer className="mt-auto bg-yellow-400 px-6 py-8 w-full" id="footer">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center space-y-4 text-center">
          {/* Logo */}
          <div className="mb-6 logo text-9xl">wo</div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-gray-900">
            <a
              href="https://github.com/ozy360"
              className="hover:underline hover:underline transition-all duration-200"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit GitHub profile"
            >
              github.com/ozy360
            </a>
            <a
              href="mailto:ozdev40@gmail.com"
              className="hover:underline hover:underline transition-all duration-200"
              aria-label="Send email"
            >
              ozdev40@gmail.com
            </a>
          </div>

          {/* Optional copyright */}
          <div className="text-sm text-gray-900 mt-4">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
