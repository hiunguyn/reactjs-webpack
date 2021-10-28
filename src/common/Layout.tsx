import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { useProfile } from '@/data/useProfile'
import styles from '@/styles/common.module.scss'

const Layout: React.FC = ({ children }) => {
  const history = useHistory()

  const { data, isError } = useProfile()

  useEffect(() => {
    if (isError) history.push('/login')
  }, [isError, history])

  if (data) {
    return (
      <div className={styles.layout}>
          {children}
      </div>
    )
  }

  return <></>
}

export default Layout
