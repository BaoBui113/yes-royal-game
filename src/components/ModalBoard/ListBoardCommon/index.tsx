'use client';
import { IBoard } from '@/lib/type';

export default function ListBoardCommon({
  data,
  currentPage,
  totalPage,
  handleSelectPage,
}: {
  data: IBoard[];
  totalPage: number;
  handleSelectPage: (page: string) => Promise<void>;
  currentPage: string;
}) {
  return (
    <div className="bg-[url('/assets/image/black75.png')] rounded-[5px] border border-solid border-[#4c3023] overflow-auto p-5">
      <table className="w-full">
        <tbody>
          <tr className="bg-[#4c3023] h-8 text-white">
            <th className="w-[10%]">No.</th>
            <th className="w-[70%] text-center">제목</th>
            <th className="w-[20%]">등록일</th>
          </tr>
          {data?.map((item, index) => {
            return (
              <tr
                key={index}
                className="h-8 text-sm text-[#fdcc83] border-b border-[#2f271e]"
              >
                <td className="text-center">{item.NOTICE_SEQ}</td>
                <td className="text-left">{item.NOTICE_TITLE}</td>
                <td className="text-center">
                  {' '}
                  {new Date(item.RGST_DT).toLocaleDateString()}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {totalPage > 1 && (
        <div className="flex gap-2 text-[#fdcc83] items-center justify-center text-sm mt-2">
          <span>《 〈 PREV </span>
          {Array.from({ length: totalPage }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handleSelectPage(page.toString())}
            >
              {page === Number(currentPage) ? page : `[${page}]`}
            </button>
          ))}
          <span> NEXT 〉 》</span>
        </div>
      )}
    </div>
  );
}
