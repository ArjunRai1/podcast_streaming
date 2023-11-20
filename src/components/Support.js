import "./support.css";
function Support() {
    
    return (
        
        <div class="background-image d-flex align-items-center justify-content-center">
            <form class="border border-4 p-4">
                <div class="mb-3">
                    <label for="name" class="form-label text-white">Name:</label>
                    <input type="text" class="form-control" id="name" name="name" />
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label text-white">Email Address:</label>
                    <input type="email" class="form-control" id="email" name="email" />
                </div>
                <div class="mb-3">
                    <label class="form-label text-white">Inquiry Type:</label>
                    <select class="form-select" name="inquiryType">
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Technical Issue">Technical Issue</option>
                        <option value="Account Assistance">Account Assistance</option>
                        <option value="Content Request">Content Request</option>
                        <option value="Feedback/Suggestions">Feedback/Suggestions</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label class="form-label text-white">Description:</label>
                    <textarea className="form-control" name="description" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}
export default Support;