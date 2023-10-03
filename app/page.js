import LegendIndicator from '@/components/LegendIndicator'
import Image from 'next/image'
import Calendar from '@/components/Calendar'



export default function Home() {

  return (
    <div className=''>
      <div>
        <div>
          <LegendIndicator />
        </div>
        <div className='mt-4 ml-4 mr-4'>
          <Calendar />
        </div>
      </div>
    </div>
  )
}
