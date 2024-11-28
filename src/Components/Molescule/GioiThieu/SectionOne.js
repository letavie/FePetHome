import React from 'react';
import Text from '../../Atom/Text/Text';
import "./SectionOne.css"

const SectionOne = () => (
    <section className="section-container">
        <div className='section-one'>
            <div className="my-5 text-lg font-medium leading-7 text-[#54595f]">
                <Text
                    content={"PET HOME ra đời với mong muốn mang lại cho khách hàng sự chuyên nghiệp, uy tín mang nét đẹp hoa mỹ mà chúng tôi đem lại sự trải nghiệm tốt nhất cho thú cưng của chúng ta. Với hơn 5 năm kinh nghiệm trong ngành dịch vụ thú cưng bao gồm: Thú y, Spa thú cưng, Khách sạn thú cưng, Cung cấp các dòng thú cưng chuyên nghiệp..."}

                />
            </div>
            <div>
                <Text
                    content={"Tầm nhìn – Sứ mệnh – Giá trị cốt lõi của Pet HOME"}
                    className={"font-sans text-4xl font-extrabold"}
                />
            </div>
            <div className="mt-2">
                <p className="text-sm font-bold">TẦM NHÌN</p>
                <p className="text-sm font-light mb-2">Pet Home định hướng phát triển trở thành Công ty cung cấp các Sản phẩm, dịch vụ cho thú cưng hàng đầu Việt Nam.</p>


                <p className="text-sm font-bold">SỨ MỆNH</p>
                <p className="text-sm font-light mb-2">Cam kết mang đến trọn vẹn trải nghiệm cho Khách hàng và vẻ đẹp toàn diện cho thú cưng.</p>


                <p className="text-sm font-bold">GIÁ TRỊ CỐT LÕI</p>
                <li className="text-sm font-light mb-2">Trân trọng khách hàng: Mỗi khách hàng khi đến PET HOME là một điều đáng quý. Khách hàng xứng đáng được trải nghiệm những dịch vụ tốt nhất, thú cưng được chăm sóc chỉn chu nhất.</li>

                <li className="text-sm font-light">Tôn trọng đồng nghiệp: Luôn luôn lắng nghe và đề cao tinh thần đồng đội, tất cả cùng vì một mục tiêu phát triển chung.</li>

                <li className="text-sm font-light">Coi trọng công việc: Thái độ làm việc chuyên nghiệp, chịu trách nhiệm với kết quả công việc.</li>
                <p className="text-sm font-light my-5">PET HOME – Với hơn 5 kinh nghiệm trong ngành dịch vụ thú cưng bao gồm: Spa thú cưng, Dịch vụ thú cưng tại nhà, Thú y, Sản phẩm, phụ kiện thú cưng, Khách sạn thú cưng, Dịch vụ dắt chó đi dạo,…</p>
            </div>
            <div>
                <Text
                    content={"Đội ngũ PET HOME"}
                    className={"font-sans text-4xl font-extrabold"}
                />
            </div>
            <div>
                <p className="text-sm font-light mt-2">Với đội ngũ Nhân viên Spa – Grooming chuyên nghiệp, đội ngũ chăm sóc khách hàng có nhiều năm kinh nghiệm. Nhân viên PET HOME với tin thần trách nhiệm, cởi mở với Slogan “Để thú cưng của bạn được chỉn chu nhất”.</p>
                <p className="text-sm font-light mt-2">Cam kết mang lại cho quý khách dịch vụ với chất lượng tốt nhất và mức chi phí hợp lý..</p>
            </div>
            <div>
                <Text
                    content={"Tại sao lại chọn PET HOME ?"}
                    className={"font-sans text-4xl font-extrabold"}
                />
            </div>
            <div>
                <li className="text-sm font-light mb-5">Dịch vụ CHẤT LƯỢNG đi đôi với UY TÍN.</li>

                <li className="text-sm font-light mb-5" >Tôn trọng đồng nghiệp: Luôn luôn lắng nghe và đề cao tinh thần đồng đội, tất cả cùng vì một mục tiêu phát triển chung.</li>

                <li className="text-sm font-light mb-5">Coi trọng công việc: Thái độ làm việc chuyên nghiệp, chịu trách nhiệm với kết quả công việc.</li>

                <li className="text-sm font-light mb-5">Trang thiết bị ĐẦY ĐỦ, ĐẢM BẢO vệ sinh sạch sẽ;</li>

                <li className="text-sm font-light mb-5" >Giá TỐT NHẤT thị trường;</li>

                <li className="text-sm font-light mb-5">Chương trình KHUYẾN MÃI thường xuyên, ưu đãi đặc biệt với khách hàng đã sử dụng dịch vụ.</li>

            </div>
            <div>
                <p className="text-sm font-semibold mb-7">PET HOME CAM KẾT</p>
                <p className="text-sm font-light mb-5">- ĐEM LẠI DỊCH VỤ TỐT NHẤT VỚI GIÁ TỐT NHẤT</p>
                <p className="text-sm font-light mb-5">- ĐỘI NGŨ CHĂM SÓC KHÁCH HÀNG CHUYÊN NGHIỆP</p>
                <p className="text-sm font-light mb-5">- NHÂN VIÊN ĐẾN TẠI NHÀ</p>
            </div>

        </div>

    </section>
);
export default SectionOne;