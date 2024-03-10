import React , {useState} from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import Spinner from './Spinner'
import { TextInput ,Button , Modal , Label} from 'flowbite-react'
export default function MentorProfileCard({mentor ,token ,setRefresh}) {
const approveMentorURL = process.env.REACT_APP_ANUDEEP_Approve_Mentor  
const [openModal, setOpenModal] = useState(false);
 const [loading , setLoading] = useState(false)
 const [remarks , setRemarks] = useState("")
 const [actionType ,setActionType] = useState("")
  const onSubmit = async (e)=>{
  e.preventDefault()
  setLoading(true)
 try{
  await axios.post(approveMentorURL, 
  {id : mentor.id , action_type : actionType , remarks : remarks}, {
  headers: {
    'accept': 'application/json',
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/x-www-form-urlencoded',
    'X-CSRF-TOKEN': ''
  }
})
if(actionType==="1")toast.success("Mentor Accepted Succesfully")
else toast.success("Mentor Rejected Successfully")
 }
 catch(e) {
  toast.error("Unsuccessfull Approval")
 }
  setRefresh(true)
  setLoading(false)
  
  }

const onRejectOrApprove =  async (e)=>{
  setActionType(e.target.value)
  setOpenModal(true)

}

function onCloseModal() {
  setOpenModal(false);
  setRemarks('');
}
  return (loading ?<Spinner/> :  
    <>    <div className="max-w-sm p-2 bg-white border border-blue-500 rounded-lg shadow blue:bg-blue-950 dark:border-blue-700">
    <h4><b>Name: </b>{mentor.name}</h4>
    <h4><b>Email: </b>{mentor.email}</h4>
    <h4><b>Phone: </b>{mentor.phone}</h4>
    <h4><b>Designation: </b>{mentor.designation}</h4>
    <h4><b>Organization: </b>{mentor.organization}</h4>
    <h4><b>LinkedIn Id: </b><a href={mentor.linkedln_id}>{mentor.linkedln_id}</a></h4>
    <h4><b>Id Validation: </b>{mentor.aadhar_id}</h4>
    {mentor.IdImage && <img src={mentor.id_proof} alt={mentor.name}/>}
    <div className='flex justify-between'>
        <button type="button" class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900" onClick={onRejectOrApprove} value="2">Reject</button>
        <button type="button" class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800" value="1" onClick={onRejectOrApprove}>Approve</button>
    </div>
</div>
<Modal show={openModal} size="md" onClose={onCloseModal} popup >
        <Modal.Header/>
        <Modal.Body className='h-full' >
         <form onSubmit={onSubmit}>
         <div>
              <div className="mb-2 block">
                <Label htmlFor="remarks" value="Enter your Remarks For Approval/Rejection" />
              </div>
              <TextInput
             
                placeholder="Reason"
                name='remarks'
                onChange={(event) => setRemarks(event.target.value)}
                required
              />
            </div>
          <div className="flex justify-end m-2"><Button type='Submit'>Submit</Button></div>
          </form> 
          </Modal.Body> 
      </Modal>
</>  )
}
