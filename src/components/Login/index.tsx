import { useAuth } from '@/lib/context/AuthContext';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import * as yup from 'yup';
import { onLogin } from './actionLogin';

const schema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { login, user, logout } = useAuth();
  const onSubmit = async (data: { username: string; password: string }) => {
    const formData = new FormData();
    formData.append('username', data.username);
    formData.append('password', data.password);
    const response = await onLogin(formData);
    if (response.status === '0') {
      toast.success('비밀번호가 일치하지 않습니다');

      login(JSON.stringify(response));
      return;
    }
    toast.error('비밀번호 또는 사용자 이름이 올바르지 않습니다');
  };
  console.log(user);

  return (
    <>
      {!user ? (
        <section className="bg-[url('/assets/image/banner/member-logoff.png')] w-[430px] h-[400px] bg-no-repeat px-[30px] py-5">
          <form
            action={onLogin}
            onSubmit={handleSubmit(onSubmit)}
            autoComplete="off"
          >
            <input
              {...register('username')}
              name="username"
              type="text"
              className="absolute top-[38px] left-[80px] w-[130px] bg-transparent h-[17px] text-white px-2 border border-solid border-white text-xs"
            />
            {errors.username && (
              <p className="text-red-500 absolute top-[60px] left-[80px]  text-xs">
                {errors.username.message}
              </p>
            )}

            <input
              {...register('password')}
              name="password"
              type="password"
              className="absolute top-[80px] left-[80px] w-[130px] bg-transparent h-[17px] text-white px-2 border border-solid border-white text-xs"
            />
            {errors.password && (
              <p className="text-red-500 text-xs">{errors.password.message}</p>
            )}

            <input
              style={{ textIndent: '-200%' }}
              type="submit"
              className="bg-[url('/assets/image/banner/login_btn.png')] w-[240px] h-10 absolute top-[110px] left-[30px] cursor-pointer overflow-hidden"
            />
          </form>

          <div className="text-[#d4b072] text-xs absolute top-[80px] right-[150px] cursor-pointer">
            ID/PW찾기
          </div>
        </section>
      ) : (
        <div className="flex flex-col gap-2 absolute right-4 lg-screen:right-[250px] top-0">
          <section className="bg-[url('/assets/image/banner/member-logon.png')] bg-no-repeat w-[300px] min-h-[60px] py-5 px-[30px] text-[#d4b072]">
            <div className="flex my-[10px]">
              <strong>{user.MEM_LID}</strong>
              <span className="px-1"> 님 </span>
              <button
                onClick={logout}
                className="bg-red-gradient w-[80px] h-[27px] text-xs rounded text-[#140014]"
              >
                Logout
              </button>
            </div>
            <div className="flex items-center text-[#7a5a3d] text-xs">
              <span className="cursor-pointer hover:text-[#e2c396] transition-all ease-linear duration-200">
                [마이페이지]
              </span>
              <span className="cursor-pointer hover:text-[#e2c396] transition-all ease-linear duration-200">
                [내쿠폰내역]
              </span>
              <span className="cursor-pointer hover:text-[#e2c396] transition-all ease-linear duration-200">
                [입/출금내역]
              </span>
            </div>
          </section>
          <section className="bg-[url('/assets/image/banner/callcenter.png')] bg-no-repeat w-[300px] pt-[55px] bg-contain h-[250px] text-[#d4b072]">
            <div className="flex ml-8 items-center">
              <span className="block w-[85px]">게임상담</span>
              <span className="text-white text-[22px] leading-[30px] font-bold">
                070 7893 1363
              </span>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
