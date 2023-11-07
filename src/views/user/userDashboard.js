"use client";
import PasswordAlert from "@/components/alerts/passwordAlert";
import DashboardCard from "@/components/dashboardCard";
import UserDropdown from "@/components/dropdown/userDropdown";
import BasicModal from "@/components/modals/basicModal";
import PasswordForm from "@/components/pageComponents/dashboard/passwordForm";
import { ChangePassword } from "@/libs/functions";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function UserDashboard({ item }) {
  const [modal, setModal] = useState();
  const [message, setMessage] = useState();
  const [openDialog, setOpenDialog] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();
  const handleChangePassword = async (e) => {
    e.id = session?.user?.id;
    await ChangePassword({
      uri: "changePassword",
      e: e,
      setMessage: setMessage,
    });
    setModal(null);
    setOpenDialog(true);
  };
  const Logout = async () => {
    const res = await signOut({ redirect: false });
    router.replace("/login");
  };

  return (
    <div>
      <div className="w-full h-fit bg-[#1E5AF9]">
        <div className="w-full p-6 pb-0">
          <div className="flex w-full justify-between ">
            <div>
              <div className="font-RalewayBold text-xl text-white">
                {session?.user?.nama}
              </div>
              <div className="font-LatoRegular text-sm text-white">
                {session?.user?.nim}
              </div>
            </div>
            <div className="flex justify-center items-center w-12 aspect-square bg-white rounded-full">
              <div className="flex justify-center items-center w-10 aspect-square bg-white rounded-full overflow-hidden cursor-pointer">
                <UserDropdown setModal={setModal} Logout={Logout} />
              </div>
            </div>
          </div>
          <div className="h-[1px] w-full mt-8 bg-white" />
        </div>

        <BasicModal name="Change Password" modal={modal} setModal={setModal}>
          <PasswordForm handleChangePassword={handleChangePassword} />
        </BasicModal>
        <PasswordAlert
          open={openDialog}
          message={message}
          handleClose={() => setOpenDialog(false)}
        />

        <div className="w-full p-6">
          <div className="flex w-full justify-between items-end">
            <div className="font-RalewayBold text-white">Lihat Calon</div>
            <Link href="/dashboard/candidates">
              <div className="font-RalewayMedium text-xs text-white">
                Lihat Semua
              </div>
            </Link>
          </div>
        </div>
        <div className="w-full">
          <Swiper
            slidesPerView={1.3}
            spaceBetween={0}
            centeredSlides={false}
            pagination={{
              el: ".slider_banner",
              clickable: true,
            }}
            modules={[Pagination]}
          >
            {item.map((data, index) => (
              <SwiperSlide key={index}>
                <Link href={`/dashboard/candidates/${data._id}`}>
                  <div className="w-full flex justify-center bg-transparent">
                    <div className="w-[90%] bg-white overflow-hidden rounded-lg relative z-0">
                      <div className="w-full aspect-[11/6]">
                        <Image
                          src={data.image}
                          alt={data.image}
                          sizes="100vh"
                          fill
                          priority
                          className="h-full w-auto object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="w-full flex justify-center">
            <div className="dot-carousel slider_banner py-4"></div>
          </div>
        </div>
      </div>
      <div className="w-full h-[65vh]">
        <div className="p-6">
          <div className="space-y-4">
            <div className="font-RalewayBold text-[#000000]/50">Menu Utama</div>
            <DashboardCard
              name="Tutorial"
              url="/dashboard/tutorial"
              description="Biar tau cara untuk memilih pasangan calon ketua dan wakil ketua BEM KBM PNB 2023 !"
              icon={
                <svg
                  className="w-8"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.6667 18V4.00001C26.6667 3.64638 26.5262 3.30724 26.2762 3.0572C26.0261 2.80715 25.687 2.66667 25.3334 2.66667H6.66671C6.31309 2.66667 5.97395 2.80715 5.7239 3.0572C5.47385 3.30724 5.33337 3.64638 5.33337 4.00001V28C5.33337 28.3536 5.47385 28.6928 5.7239 28.9428C5.97395 29.1929 6.31309 29.3333 6.66671 29.3333H14M11.3334 8.00001H20.6667M11.3334 13.3333H20.6667M11.3334 18.6667H15.3334"
                    stroke="#1E5AF9"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M26.0001 29.3333L23.6901 27.0233M23.6901 27.0233C24.006 26.7153 24.2576 26.3475 24.4304 25.9414C24.6031 25.5353 24.6934 25.099 24.6962 24.6577C24.699 24.2164 24.6141 23.779 24.4465 23.3707C24.2788 22.9625 24.0318 22.5916 23.7198 22.2796C23.4077 21.9676 23.0368 21.7206 22.6286 21.5531C22.2203 21.3855 21.7829 21.3007 21.3416 21.3035C20.9003 21.3064 20.464 21.3968 20.0579 21.5696C19.6518 21.7423 19.2841 21.994 18.9761 22.31C18.3555 22.9361 18.0083 23.7826 18.0104 24.6641C18.0124 25.5456 18.3636 26.3905 18.987 27.0137C19.6104 27.637 20.4554 27.9879 21.3369 27.9897C22.2184 27.9915 23.0641 27.644 23.6901 27.0233Z"
                    stroke="#1E5AF9"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
            />
            <DashboardCard
              name="Gunakan Suara"
              url="/dashboard/vote"
              disabled={session?.user?.eligible === "Not Eligible"}
              description="Yuk gunakan suaramu dengan cara memilih salah satu kandidat !"
              icon={
                <svg
                  className="w-8"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.25 18.9583H25.2583L22.3417 21.875H25.1271L27.7083 24.7917H7.29167L9.8875 21.875H12.8771L9.96042 18.9583H8.75L4.375 23.3333V29.1667C4.375 30.7708 5.67292 32.0833 7.27708 32.0833H27.7083C28.4819 32.0833 29.2237 31.776 29.7707 31.2291C30.3177 30.6821 30.625 29.9402 30.625 29.1667V23.3333L26.25 18.9583ZM24.7917 11.5937L17.5729 18.8125L12.4104 13.65L19.6292 6.43124L24.7917 11.5937ZM18.6083 3.33958L9.31875 12.6292C9.18356 12.7641 9.0763 12.9243 9.00312 13.1008C8.92994 13.2772 8.89227 13.4663 8.89227 13.6573C8.89227 13.8483 8.92994 14.0374 9.00312 14.2138C9.0763 14.3902 9.18356 14.5505 9.31875 14.6854L16.5375 21.9042C17.1063 22.4729 18.025 22.4729 18.5938 21.9042L27.8688 12.6292C28.0039 12.4942 28.1112 12.334 28.1844 12.1576C28.2576 11.9812 28.2952 11.792 28.2952 11.601C28.2952 11.41 28.2576 11.2209 28.1844 11.0445C28.1112 10.8681 28.0039 10.7078 27.8688 10.5729L20.65 3.35416C20.5184 3.2165 20.3605 3.10666 20.1857 3.03118C20.0109 2.9557 19.8227 2.9161 19.6323 2.91474C19.4418 2.91338 19.2531 2.95028 19.0772 3.02326C18.9013 3.09624 18.7419 3.20381 18.6083 3.33958Z"
                    fill="#1E5AF9"
                  />
                </svg>
              }
            />
          </div>
          <div className="space-y-4 pt-10">
            <div className="font-RalewayBold text-[#000000]/50">Bantuan</div>
            <DashboardCard
              name="Hubungi Kami"
              url="https://wa.me/+6282145064560"
              description="Kalo kamu ada kendala atau masalah pada saat melakukan pemilihan hubungi tim kami ya !"
              icon={
                <svg
                  className="w-8"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.0174 27.4677C14.8394 28.1701 14.8278 28.9042 14.9834 29.6119C9.537 28.8426 6.375 24.9985 6.375 21.25V20.1875C6.375 19.3421 6.71083 18.5314 7.3086 17.9336C7.90637 17.3358 8.71712 17 9.5625 17H22.3614C22.3932 17.7544 22.6313 18.4896 23.0584 19.125H9.5625C9.28071 19.125 9.01046 19.2369 8.8112 19.4362C8.61194 19.6355 8.5 19.9057 8.5 20.1875V21.25C8.5 23.9126 10.812 26.775 15.0174 27.4677ZM17 3.1875C18.5499 3.1875 20.0362 3.80318 21.1322 4.89909C22.2281 5.99501 22.8438 7.48139 22.8438 9.03125C22.8438 10.5811 22.2281 12.0675 21.1322 13.1634C20.0362 14.2593 18.5499 14.875 17 14.875C15.4501 14.875 13.9638 14.2593 12.8678 13.1634C11.7719 12.0675 11.1562 10.5811 11.1562 9.03125C11.1562 7.48139 11.7719 5.99501 12.8678 4.89909C13.9638 3.80318 15.4501 3.1875 17 3.1875ZM17 5.3125C16.0137 5.3125 15.0678 5.7043 14.3704 6.4017C13.673 7.0991 13.2812 8.04498 13.2812 9.03125C13.2812 10.0175 13.673 10.9634 14.3704 11.6608C15.0678 12.3582 16.0137 12.75 17 12.75C17.9863 12.75 18.9322 12.3582 19.6296 11.6608C20.327 10.9634 20.7188 10.0175 20.7188 9.03125C20.7188 8.04498 20.327 7.0991 19.6296 6.4017C18.9322 5.7043 17.9863 5.3125 17 5.3125ZM24.616 16.1096L25.2174 14.5159C25.7656 13.0709 27.4741 12.3569 28.9149 12.971L29.7394 13.3237C30.7445 13.753 31.5775 14.5308 31.7518 15.5763C32.7229 21.3669 27.6973 29.6034 21.913 31.705C20.8675 32.0833 19.737 31.79 18.8424 31.1822L18.1071 30.6829C17.8053 30.4795 17.5511 30.2132 17.3622 29.9021C17.1733 29.591 17.0541 29.2426 17.0129 28.881C16.9717 28.5194 17.0094 28.1531 17.1235 27.8075C17.2376 27.4619 17.4253 27.1452 17.6736 26.8791L18.8318 25.5892C19.1032 25.2889 19.4503 25.0669 19.8367 24.9462C20.2231 24.8254 20.6348 24.8105 21.029 24.9029L23.6321 25.5191C25.6955 24.2292 26.8026 22.4166 26.9514 20.0791L25.0856 18.2516C24.8063 17.9798 24.6129 17.6319 24.5294 17.2511C24.4459 16.8703 24.476 16.4734 24.616 16.1096Z"
                    fill="#1E5AF9"
                  />
                </svg>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
