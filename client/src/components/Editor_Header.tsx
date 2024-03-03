import { Code, Copy, Loader2, Save, Share2 } from 'lucide-react'
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
import axios from 'axios'
import { handleError } from '@/utils/handleError'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { toast } from "sonner"


function Editor_Header() {
  const [saveLoading, setSaveLoading] = useState(false);
  const navigate = useNavigate();
  const fullCode = useSelector((state: RootState) => state.compilerSlice.fullcode);
  const dispatch = useDispatch();
  const { urlId } = useParams();
  const [shareBtn,setSharebtn]=useState<boolean>(false)
    const defaultLanguage = useSelector(
        (state: RootState) => state.compilerSlice.currentLanguage
  ) 
  const handleSaveCode = async () => {
    setSaveLoading(true);
    try {
      const response = await axios.post("http://localhost:4000/compiler/save", {
        fullCode: fullCode
      });
      navigate(`/compiler/${response.data.url}`, { replace: true })
    } catch (error) {
      handleError(error);
    }
    finally {
      setSaveLoading(false);
    }
  };
  useEffect(() => {
    if (urlId) {
      setSharebtn(true);
    }
    else {
      setSharebtn(false);
    }
  },[urlId])
  return (
      <div className='h-[50px] bg-black text-white flex items-center justify-between py-4 px-4 rounded-md '>
          <div className='flex items-center gap-3'>
        <Button onClick={handleSaveCode} disabled={saveLoading} className='flex items-center gap-2' variant="success">{saveLoading ? <>
          <Loader2 size={16} className='animate-spin' />Saving...</> : <>
          <Save size={16} />Save</>}</Button>
            {shareBtn && <Dialog>
          <div className='flex flex-col gap-3 justify-center items-center'>
          <DialogTrigger className='justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-9 px-4 py-2 flex items-center gap-2'><Share2 size={16} />Share</DialogTrigger>
  <DialogContent>
    <DialogHeader>
              <DialogTitle className='flex items-center justify-center gap-2'><Code size={22} />Share your Code!</DialogTitle>
              
                <DialogDescription className='flex items-center flex-col justify-center text-md'>
                  <div className='flex items-center gap-2 w-full'>
                  <input type="text" disabled value={window.location.href} className='bg-gray-800 p-2 w-full h-8 rounded-md outline-none text-sm' />
                    <Button variant="secondary" className='h-8' onClick={() => {
                      window.navigator.clipboard.writeText(window.location.href);
                      toast("URL copied to clipboard");
                    }}><Copy size={16} /></Button> 
                  </div>
                  
          Share this URL with your friends to collaborate
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
          </div>
        </Dialog>}
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