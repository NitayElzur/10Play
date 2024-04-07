import './AddEntry.css'
import axios from 'axios';
import { send } from '../../utils/data';

interface AddEntryProps {
    setIsView: React.Dispatch<React.SetStateAction<boolean>>
}

function AddEntry({ setIsView }: AddEntryProps) {
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const target = e.target as HTMLFormElement
        const button = target[2] as HTMLButtonElement
        button.disabled = true 
        const keyElement = target[0] as HTMLInputElement
        const bodyElement = target[1] as HTMLTextAreaElement
        axios.post(send, {
            key: keyElement.value + '.txt',
            body: bodyElement.value
        })
            .then(() => {

                alert('Success!')
                setIsView(prev => !prev)
            })
            .catch(err => console.log(err))
    }
    return (
        <div id="add-entry">
            Add new entry:
            <form id='entry-form' onSubmit={handleSubmit}>
                <label htmlFor="Key">File Name(Key):</label>
                <input name='Key' type="text" />
                <label htmlFor="Body">Body:</label>
                <textarea name="Body" cols={30} rows={10}></textarea>
                <button>submit</button>
            </form>
        </div>
    )
}
export default AddEntry;