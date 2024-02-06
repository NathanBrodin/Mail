import Image from 'next/image';
import mailPreview from '../../../../public/mail-preview.png';

export default function Preview() {
  return (
    <div className="w-full flex flex-col items-center relative" id='preview'>
      <Image
        src={mailPreview}
        alt="Mail preview"
        className="shadow-xl border border-slate-800 rounded-xl lg:w-2/3"
      />
    </div>
  );
}
