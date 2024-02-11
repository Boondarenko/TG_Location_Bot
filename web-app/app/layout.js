import "./styles.css";

export const metadata = {
  title: "Telegram Location Bot",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://telegram.org/js/telegram-web-app.js"
          async
        ></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
