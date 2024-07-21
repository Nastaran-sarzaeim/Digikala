import styles from '../styles/footer.module.css'
import '../../public/fonts/style.css'
import serviseImg1 from '../assets/images/express-delivery.svg'
import serviseImg2 from '../assets/images/cash-on-delivery.svg'
import serviseImg3 from '../assets/images/support.svg'
import serviseImg4 from '../assets/images/days-return.svg'
import serviseImg5 from '../assets/images/original-products.svg'
import eNamad1 from '../assets/images/rezi.webp'
import eNamad2 from '../assets/images/Enamad.png'
import logo from '../assets/images/digi.svg'

function Footer() {
    const services = [{ title: 'اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس', img: serviseImg1 },
    { title: 'امکان پرداخت در محل', img: serviseImg2 },
    { title: '۷ روز ﻫﻔﺘﻪ، ۲۴ ﺳﺎﻋﺘﻪ', img: serviseImg3 },
    { title: 'هفت روز ضمانت بازگشت کالا', img: serviseImg4 },
    { title: 'ﺿﻤﺎﻧﺖ اﺻﻞ ﺑﻮدن ﮐﺎﻟﺎ', img: serviseImg5 }]

    const digikala = ['اتاق خبر دیجی‌کالا', 'فروش در دیجی‌کالا', 'فرصت‌های شغلی', 'گزارش تخلف در دیجی‌کالا', 'تماس با دیجی‌کالا', 'درباره دیجی‌کالا']
    const customerServices = ['پاسخ به پرسش‌های متداول', 'رویه‌های بازگرداندن کالا', 'شرایط استفاده', 'حریم خصوصی', 'گزارش باگ']
    const purchaseGuide = ['نحوه ثبت سفارش', 'رویه ارسال سفارش', 'شیوه‌های پرداخت']
    const contactUs = ['cube-social-instagram', 'cube-social-telegram', 'cube-social-linkedin', 'cube-social-aparat']

    const StyleForSocialIcon = {
        fontSize: '40px',
        color: '#a1a3a8'
    };
    const StyleForChevonLeftIcon = {
        fontSize: '18px',
        color: 'cadetblue'
    }; 
    const StyleForChevonUpIcon = {
        fontSize: '18px',
        color: '#d5d5d5'
    };
    return (
        <>
            <footer className={styles.footerWithoutResponsive}>
                <div className={styles.footerPartOne}>
                    <div className={styles.topPartOne}>
                        <div>
                            <img src={logo} className={styles.iconDigikalaFooter} />
                        </div>
                        <button className={styles.toTop}>
                            <a href="#top" className={styles.aToTop}>بازگشت به بالا</a>
                            <i className='cube-nav-chevron-up' style={StyleForChevonUpIcon}></i>
                        </button>
                    </div>
                    <div className={styles.bottomPartOne}>
                        <p>تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</p>
                        <span className="line-right"></span>
                        <p>۰۲۱-۹۱۰۰۰۱۰۰</p>
                        <span className="line-right"></span>
                        <p>۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</p>
                    </div>
                </div>
                <div className={styles.footerPartTwo}>
                    {services.map((service) => {
                        return (
                            <div className={styles.partTwo}>
                                <div className={styles.iconFooter}>
                                    <img src={service.img} />
                                </div>
                                <p className={styles.titleIconFooter}>{service.title}</p>
                            </div>
                        )
                    })}
                </div>
                <div className={styles.footerPartThree}>
                    <div>
                        <h3>با دیجی‌کالا</h3>
                        {digikala.map((item) => {
                            return (
                                <p className={styles.itemFooterPartthree}>{item}</p>
                            )
                        })}
                    </div>
                    <div>
                        <h3>خدمات مشتریان</h3>
                        {customerServices.map((item) => {
                            return (
                                <p className={styles.itemFooterPartthree}>{item}</p>
                            )
                        })}
                    </div>
                    <div>
                        <h3>راهنمای خرید از دیجی‌کالا</h3>
                        {purchaseGuide.map((item) => {
                            return (
                                <p className={styles.itemFooterPartthree}>{item}</p>
                            )
                        })}
                    </div>
                    <div className={styles.partThreeLeftSide}>
                        <div>همراه ما باشید!
                        </div>
                        <div className={styles.containerIconSocial}>
                            {contactUs.map((icon) => {
                                return (
                                    <div>
                                        <i className={icon} style={StyleForSocialIcon} ></i>
                                    </div>
                                )
                            })}
                        </div>
                        <div>با ثبت ایمیل، از تخفیف‌ها با‌خبر شوید</div>
                        <div>
                            <input type="email" className={styles.email} placeholder="ایمیل شما" />
                            <button className={styles.btnEmail}> ثبت</button>
                        </div>
                    </div>
                </div>
                <div className={styles.footerPartFive}>
                    <div>
                        <div className={styles.titleDes}>فروشگاه اینترنتی دیجی‌کالا، بررسی، انتخاب و خرید آنلاین
                        </div>
                        <div className={styles.des}>یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی متنوع، باکیفیت و
                            دارای قیمت
                            مناسب را در مدت زمان ی کوتاه به دست مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛
                            ویژگی‌هایی که فروشگاه اینترنتی دیجی‌کالا سال‌هاست بر روی آن‌ها کار کرده و توانسته از این طریق
                            مشتریان ثابت خود را داشته باشد.
                            یکی از مهم‌ترین دغدغه‌های کاربران دیجی‌کالا یا هر فروشگاه‌ اینترنتی دیگری، این است که کالای
                            خریداری شده چه زمانی به دستشان می‌رسد. دیجی‌کالا شیوه‌های مختلفی از ارسال را متناسب با فروشنده
                            کالا،‌ مقصد کالا و همچنین نوع کالا در اختیار کاربران خود قرار می‌دهد. هر یک از روش های ارسال
                            دیجی کالا شرایط و ویژگی‌های خاص خود را دارند که ممکن است گاهی برای کاربران جدید، مبهم و پیچیده
                            به نظر برسند. برای آگاهی بیشتر مشتریان از خدمات دیجی‌کالا، این فروشگاه اینترنتی در بخشی از
                            وب‌سایت خود راهنمای کاملی از شیوه‌‌های ارسال را به صورت ساده و به دور از پیچیدگی، قرار داده است
                            که شامل 8 نوع ارسال کالا به روش‌های زیر است: ارسال امروز، دریافت حضوری، دریافت از گنجه، ارسال
                            توسط فروشنده، ارسال عادی، ارسال کالاهای بزرگ، سنگین و فوق سنگین، ارسال سریع سوپرمارکتی، ارسال با
                            پست
                        </div>
                        <div className={styles.containerShowMore}>
                            <p> مشاهده بیشتر</p>
                            <i className='cube-nav-chevron-left' style={StyleForChevonLeftIcon}></i>
                        </div>
                    </div>
                    <div className={styles.containerENamad}>
                        <div>
                            <img src={eNamad1} className={styles.eNamad} />
                        </div>
                        <div>
                            <img src={eNamad2} className={styles.eNamad} />
                        </div>
                    </div>
                </div>
                <hr />
                <div className={styles.footerPartSix}>
                    <p>برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع» کافیست. تمام حقوق اين وب‌سايت نیز
                        برای شرکت نوآوران فن آوازه (فروشگاه آنلاین دیجی‌کالا) است.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer
