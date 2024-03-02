import { Save, Share2 } from 'lucide-react'
import { Button } from './ui/button'
import { RootState } from '../redux/store'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { useDispatch, useSelector } from 'react-redux'
import { CounterStatetype, updateCurrentLanguage } from '@/redux/slices/compilerSlice';

function Editor_Header() {
    const dispatch = useDispatch();
    const defaultLanguage = useSelector(
        (state: RootState) => state.compilerSlice.currentLanguage
    ) 
  return (
      <div className='h-[50px] bg-black text-white flex items-center justify-between py-4 px-4 rounded-md '>
          <div className='flex items-center gap-2'>
              <Button className='flex items-center gap-2' variant="success"><Save size={16} />Save</Button>
              <Button className='flex items-center gap-2' variant="secondary"><Share2 size={16} />Share</Button>
          </div>
          <div className='flex items-center gap-2'>
              <h3>Current Language : </h3>
          <Select defaultValue={defaultLanguage} onValueChange={(value)=>dispatch(updateCurrentLanguage(value as CounterStatetype["currentLanguage"]))}>
      <SelectTrigger className="w-[150px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="html">HTML</SelectItem>
          <SelectItem value="css">CSS</SelectItem>
          <SelectItem value="javascript">Javascript</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
          </div>
          
    </div>
  )
}

export default Editor_Header