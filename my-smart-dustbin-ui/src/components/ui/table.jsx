// table.jsx

export const Table = ({ children, className = "" }) => (
  <table className={`min-w-full table-auto ${className}`}>{children}</table>
);

export const TableHeader = ({ children, className = "" }) => (
  <thead className={`bg-gray-100 ${className}`}>{children}</thead>
);

export const TableBody = ({ children, className = "" }) => (
  <tbody className={className}>{children}</tbody>
);

export const TableRow = ({ children, className = "", ...rest }) => (
  <tr className={`border-t ${className}`} {...rest}>
    {children}
  </tr>
);

export const TableHead = ({ children, className = "" }) => (
  <th className={`px-4 py-2 text-left ${className}`}>{children}</th>
);

export const TableCell = ({ children, className = "", ...rest }) => (
  <td className={`px-4 py-2 ${className}`} {...rest}>
    {children}
  </td>
);
