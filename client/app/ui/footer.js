
const Footer = () => {
  return (
    <div className='footer flex flex-col p-10 py-20 bg-footer text-white  font-bold  gap-8'>
      <div className='flex justify-between '>
        <div className='text-3xl'>In-Review</div>
        <div>
            <ul>
                <li className='text-2xl'>Company</li>
                <li>About Us</li>
                <li>Carrers</li>
                <li>Legals</li>
            </ul>
        </div>
        <div>
        <ul>
                <li className='text-2xl'>Community</li>
                <li>Facebook</li>
                <li>linkedin</li>
                <li>Twitter</li>
                <li>Instagram</li>
            </ul>
        </div>
        <div>
        <ul>
                <li className='text-2xl'>Colleges</li>
                <li>Review</li>
                <li>Ratings</li>
                <li>Questions</li>
                <li>Analysis</li>
            </ul>
        </div>
        <div className='flex flex-col gap-5'>
            <div>
                <h1 className='text-2xl'>Contact Us</h1>
                <h3>inReview@gmail.com</h3>
            </div>
            <div>
                <h1 className='text-2xl'>Feedback</h1>
                <h3>Feedback here</h3>
            </div>
        </div>
      </div>
      <div>©copyright, all rights reserved</div>
    </div>
  );
};

export default Footer;