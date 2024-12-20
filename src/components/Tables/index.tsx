export const Tables = ({
  headers,
  data,
  isTableHalfColor,
}: {
  headers: string[];
  data: { player1: string; player2: string; group?: boolean }[];
  isTableHalfColor?: boolean;
}) => {
  return (
    <>
      <table className="w-full bg-[#4a3629] text-center border-collapse">
        <tbody>
          <tr className="bg-[#31231a] text-[#fdcc83] border border-solid border-[#4a3629] text-sm">
            {headers.map((header, inx) => {
              return (
                <th
                  key={inx}
                  className="w-1/2 p-[10px] border border-solid border-[#4a3629]"
                >
                  {header}
                </th>
              );
            })}
          </tr>

          {data.map((item, index) => {
            return (
              <tr
                key={index}
                className="p-1 bg-[#000] text-[#90553e] text-center"
              >
                <td
                  className={`border border-solid border-[#4a3629] p-[10px] whitespace-nowrap ${
                    isTableHalfColor
                      ? 'bg-[#31231a] text-[#fdcc83] font-bold'
                      : 'text-[#90553e]'
                  }`}
                >
                  {item.player1}
                </td>
                <td
                  className={`p-[10px] ${
                    item.group ? '' : 'border-b border-solid border-[#4a3629] '
                  }`}
                >
                  {item.player2}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
