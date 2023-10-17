import styles from './Container.module.scss'

export const Container = ({
   children
}: {
   children: React.ReactNode
}) => {
   return (
      <div className={styles.cntainer}>
         <div>
            {children}
         </div>
      </div>
   )
} 