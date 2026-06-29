import { useTranslation } from 'react-i18next'

export default function Loading() {
  const { t } = useTranslation()

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50">
      <h1 className="font-display !text-white text-4xl font-bold uppercase animate-pulse">
        {t('loading')}
      </h1>
    </div>
  )
}
