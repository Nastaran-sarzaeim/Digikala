import styles from '../styles/footerResponsive.module.css'


function FooterResponsive() {
  const services = ['با دیجی کالا', 'خدمات مشتریان', 'راهنمای خرید از دیجی‌کالا', 'شرکای تجاری']
  return (
    <>
      <svg style={{ display: 'none' }}>
        <symbol id="chevronleft" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"></path></symbol>
        <symbol id="expandLess" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.707 14.707l-1.414-1.414 5-5a1 1 0 011.414 0l5 5-1.414 1.414L12 10.414l-4.293 4.293z"></path></symbol>
        <symbol id="chevronDown" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><path d="M5.78 6.97L4.72 8.03l3.75 3.75a.75.75 0 001.06 0l3.75-3.75-1.06-1.06L9 10.19 5.78 6.97z"></path></symbol>
        <symbol id="support" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M18 17a4.001 4.001 0 01-3.14 3.907A3 3 0 1012 23h2a6 6 0 006-6v-.256a4.502 4.502 0 000-8.488V7a6 6 0 00-6-6h-4a6 6 0 00-6 6v1.256A4.502 4.502 0 005.5 17H7a1 1 0 001-1V9a1 1 0 00-1-1H6V7a4 4 0 014-4h4a4 4 0 014 4v1h-1a1 1 0 00-1 1v7a1 1 0 001 1h1zm.5-2H18v-5h.5a2.5 2.5 0 010 5zM6 10h-.5a2.5 2.5 0 000 5H6v-5zm7 10a1 1 0 11-2 0 1 1 0 012 0z" clip-rule="evenodd"></path></symbol>
      </svg>
      <footer className={styles.footerResponsive}>
        <div className={styles.footerResponsivePartOne}>
          <button className={styles.btnFooterResponsive}>
            <a href="#top" className={styles.aToTop}>
              برگشت به بالا
            </a>
            <svg style={{ width: '24px', height: '24px', fill: '#19bfd3' }} ><use href='#expandLess'></use></svg>
          </button>
        </div>
        <div className={styles.footerResponsivePartTwo}>
          <div className={styles.rightSideFooterResponsive}>
            <svg style={{ width: '24px', height: '24px', fill: '#000' }} ><use href='#support'></use></svg>
            <div  className={styles.titlePartOne}>
              <p>۷ روز هفته، ۲۴ ساعت</p>
              <p style={{ fontWeight: "bold" }}>تماس با پشتیبانی</p>
            </div>
          </div>
          <div>
            <button className={styles.btnPartOne}>تماس</button>
          </div>
        </div>
        <hr />
        <div className={styles.footerResponsivePartTwo}>
          <div className={styles.rightSideFooterResponsive}>
            <img src="../../Digikala/public/images/footerlogo2.webp" className={styles.logoFooter2} />
            <div className={styles.titlePartOne}>
              <p>تجربه خرید بهتر در</p>
              <p style={{ fontWeight: "bold" }}>اپلیکیشن دیجی‌کالا</p>
            </div>
          </div>
          <div>
            <button className={styles.btn2PartOne}>دانلود</button>
          </div>
        </div>
        <hr />
        {services.map((service) => {
          return (
            <>
              <div className={styles.footerResponsivePartFour}>
                <p>{service}</p>
                <svg style={{ width: '24px', height: '24px', fill: '#000' }} ><use href='#chevronDown'></use></svg>
              </div>
              <hr />
            </>
          )
        })}
        <div>
          <div>
            <div className={styles.titleDes}>
              فروشگاه اینترنتی دیجی‌کالا، بررسی، انتخاب و خرید آنلاین
            </div>
            <div className={styles.des}>
              یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی
              متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمان ی کوتاه به دست
              مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی که
              فروشگاه اینترنتی دیجی‌کالا سال‌هاست بر روی آن‌ها کار کرده و توانسته
              از این طریق مشتریان ثابت خود را داشته باشد. یکی از مهم‌ترین
              دغدغه‌های کاربران دیجی‌کالا یا هر فروشگاه‌ اینترنتی دیگری، این است
              که کالای خریداری شده چه زمانی به دستشان می‌رسد. دیجی‌کالا شیوه‌های
              مختلفی از ارسال را متناسب با فروشنده کالا،‌ مقصد کالا و همچنین نوع
              کالا در اختیار کاربران خود قرار می‌دهد. هر یک از روش های ارسال دیجی
              کالا شرایط و ویژگی‌های خاص خود را دارند که ممکن است گاهی برای
              کاربران جدید، مبهم و پیچیده به نظر برسند. برای آگاهی بیشتر مشتریان
              از خدمات دیجی‌کالا، این فروشگاه اینترنتی در بخشی از وب‌سایت خود
              راهنمای کاملی از شیوه‌‌های ارسال را به صورت ساده و به دور از
              پیچیدگی، قرار داده است که شامل 8 نوع ارسال کالا به روش‌های زیر است:
              ارسال امروز، دریافت حضوری، دریافت از گنجه، ارسال توسط فروشنده، ارسال
              عادی، ارسال کالاهای بزرگ، سنگین و فوق سنگین، ارسال سریع سوپرمارکتی،
              ارسال با پست
            </div>
            <div className={styles.btnFooterResponsive} >
              مشاهده بیشتر
              <svg style={{ width: '24px', height: '24px', fill: 'cadetblue' }} ><use href='#chevronLeft'></use></svg>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default FooterResponsive;
