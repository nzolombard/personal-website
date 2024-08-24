import { MailIcon, PhoneCall } from 'lucide-react';
import Form from '@/components/Form';

const Contact = () => {
  return (
    <section>
      <div className='container mx-auto'>
        {/* Main grid container with two columns */}
        <div className='grid xl:grid-cols-2 gap-12'>
          {/* Text and contact info */}
          <div className='flex flex-col justify-center'>
            <div className='flex items-center gap-x-4 text-primary text-lg mb-4'>
              <span className='w-[30px] h-[2px] bg-primary'></span>
              Say Hello
            </div>
            <h1 className='h1 max-w-md mb-8'>Let's Work Together.</h1>
            <p className='subtitle max-w-[400px]'>
              Interested in a motivated software developer? Reach out through the contact form or directly to discuss how I can contribute to your team.
            </p>
            <div className='flex flex-col gap-y-4 text-base xl:text-lg'>
              {/* mail */}
              <div className='flex items-center gap-x-8'>
                <MailIcon size={18} className='text-primary' />
                <div>youremail@gmail.com</div>
              </div>
              {/* phone */}
              <div className='flex items-center gap-x-8'>
                <PhoneCall size={18} className='text-primary' />
                <div>+1 647 917 2595</div>
              </div>
            </div>
          </div>
          {/* Form */}
          <div className='flex flex-col justify-center'>
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
