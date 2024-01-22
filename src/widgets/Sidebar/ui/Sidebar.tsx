import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { routeConfig, routePath } from 'shared/config/routeConfig/routeConfig'

export const Sidebar = () => {
  const {t, i18n} = useTranslation()
  
  return (
    <div>
      <Link to={routePath.main}>
        Habits
      </Link>

      <Link to={routePath.todos}>
        todos
      </Link>
    </div>
  )
}
