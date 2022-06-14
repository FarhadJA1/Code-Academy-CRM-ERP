import React from 'react'
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import '../../assets/style/Navigation/FullscreenBtn.scss'
function FullscreenButton() {
  var elem = document.documentElement;
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}
  return (
    <div className='mt-3 me-3'>
      <button onClick={()=>openFullscreen()} type="button" class="btn btn-outline-dark fullscreen-btn"><FullscreenExitIcon/></button>
    </div>
  )
}

export default FullscreenButton
