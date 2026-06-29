import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <section id="footer" className="text-center font-medium footer-text">
      <p className="text-base font-medium transition-colors">
        &copy; {new Date().getFullYear()} Sol Kim. <br />
        {t('footer.rights')}
      </p>
    </section>
  )
}
