export function Button(props) {
    return (
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
        {...props}
      />
    );
  }
  