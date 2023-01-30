import {
    WrapLine,
    MateButton,
    ImgDiv,
    EditButton,

} from './ProfileFollowStyle';
import tempProfile from '../../asset/temp/tempProfile.jpeg';

export default function ProfileFollow({mate, editMode, btnMsg}) {

    if(editMode) {
        return (
            <WrapLine>
                <MateButton>
                    <ImgDiv>
                        <img src={tempProfile} className='mate-photo' />
                    </ImgDiv>
                    <div className='text-div'>
                        <h4>{mate.name}</h4>
                        <p>{mate.greeting}</p>
                    </div>
                </MateButton>
                <EditButton>{btnMsg}</EditButton>
            </WrapLine>
        );
    }
    else {
        return (
            <WrapLine>
                <MateButton>
                    <ImgDiv>
                        <img src={tempProfile} className='mate-photo' />
                    </ImgDiv>
                    <div className='text-div'>
                        <h4>{mate.name}</h4>
                        <p>{mate.greeting}</p>
                    </div>
                </MateButton>
            </WrapLine>
        );
    }
    
}