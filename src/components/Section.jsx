export default function Section({ id, title, children }) {
  return (
    <section
      id={id}
      className="py-16 border-b border-gray-300 bg-white dark:bg-gray-900"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-8 border-b-4 border-blue-200 inline-block pb-2">
          {title}
        </h2>
        <div className="text-lg leading-relaxed text-gray-700 dark:text-gray-200">
          {children}
        </div>
      </div>
    </section>
  );
}
