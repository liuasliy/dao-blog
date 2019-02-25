import React, { Component } from 'react'

class ToastBox extends Component {
    constructor() {
        super()
        this.transitionTime = 300
        this.state = { notices: [] }
        this.removeNotice = this.removeNotice.bind(this)
    }

    getNoticeKey() {
        const { notices } = this.state
        return `notice-${new Date().getTime()}-${notices.length}`
    }

    addNotice(notice) {
        const { notices } = this.state
        notice.key = this.getNoticeKey()

        // notices.push(notice);//展示所有的提示
        notices[0] = notice;//仅展示最后一个提示
        
        this.setState({ notices })
        if (notice.duration > 0) {
            setTimeout(() => {
                this.removeNotice(notice.key)
            }, notice.duration)
        }
        return () => { this.removeNotice(notice.key) }
    }

    removeNotice(key) {
        const { notices } = this.state
        this.setState({
            notices: notices.filter((notice) => {
                if (notice.key === key) {
                    if (notice.onClose) setTimeout(notice.onClose, this.transitionTime)
                    return false
                }
                return true
            })
        })
    }

    render() {
        const { notices } = this.state
        const icons = {
            info: 'toast_info',
            success: 'toast_success',
            error: 'toast_error',
            loading: 'toast_loading'
        }
        return (
            <div className="toast">
                {
                    notices.map(notice => (
                        <div className="toast_bg" key={notice.key}>
                            <div className='toast_box'>
                                <div className={`toast_icon ${icons[notice.type]}`}></div>
                                <div className='toast_text'>{notice.content}</div> 
                            </div>
                        </div>
                    ))
                }
                <style jsx>
                {`
                    .toast {
                        position: fixed;
                        left: 0;
                        top: 0;
                        z-index: 999;
                        display: flex;
                        flex-direction: column; }
                        .toast_bg {
                          position: fixed;
                          width: 100%;
                          height: 100%;
                          left: 0;
                          top: 0; }
                        .toast_box {
                          position: relative;
                          left: 50%;
                          top: 50%;
                          width: 1.4rem;
                          height: 1rem;
                          margin: -.5rem -.7rem;
                          background: rgba(0, 0, 0, 0.65);
                          border-radius: .1rem;
                          color: #fff; }
                        .toast_text {
                          position: absolute;
                          bottom: 16%;
                          text-align: center;
                          width: 90%;
                          margin: 0 5%;
                          font-size: .14rem;
                          height: .28rem;
                          overflow: hidden;
                          text-overflow: ellipsis;
                          white-space: nowrap; }
                        .toast_icon {
                          position: relative;
                          left: 50%;
                          top: 15%;
                          margin: -.16rem;
                          width: .32rem;
                          height: .32rem; }
                        .toast_loading {
                          -webkit-animation: loading 1s steps(12, end) infinite;
                          animation: loading 1s steps(12, end) infinite;
                          background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAM1BMVEUAAAD///////////////////////////////////////////////////////////////+3leKCAAAAEHRSTlMAENCA8KAgsGDgQMCQUDBwhylaLQAAAL1JREFUOMu9U0kSwyAMK9jsS/T/1zZt2pgEZzq9RBeMZYRGDI/70bO5JptjrOAQVTonIJVK5bW2ma9A7VvpK8OdeQfbZectrDnyU+Oo0b68wGK0muDPdxpOciaizq5pkAgiIPAoew2rBVNYZoM2YHbZDNKz/2Ogam3ff5gMEL8wisfh2KKZiFiGWFkk1B7NSbhNQFy4M2+PghbODNsg7y8THM2njiy8gBgcaEUA9GgNJbxh6fJv+NxiFvYmPAFtCQZNK1qZIAAAAABJRU5ErkJggg==") no-repeat;
                          background-size: 100%; }
                        .toast_success {
                          background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAM1BMVEUAAAD///////////////////////////////////////////////////////////////+3leKCAAAAEHRSTlMA8DAQ0GBP4LCggMBwIJBAIttdjAAAAINJREFUOMvdkUsOwyAMBbH5hUCauf9pK1SlohF438x2LPn52f09+8vUfiNb/gighj8FouEjYCUoQDXiBSD7pdcMiK7XC9wCFmlDO3T20Scgx287ne13pwDU89NOJ3g3maCmJDANqIGRtLj8oi1ed1GMdmcB7wXIYX8QdQZJiM5Em3smbyVICDCOrCqSAAAAAElFTkSuQmCC") no-repeat;
                          background-size: 100%; }
                        .toast_error {
                          background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAMFBMVEUAAAD///////////////////////////////////////////////////////////87TQQwAAAAD3RSTlMA0BDAMODwUKBgsCCAQJClzVPvAAAA0UlEQVQoz2MgErAclv9o44Dgc8b/B4KvBTA+t/3XdgeWivjPG6ACbl8ngNXlp0AN+L8IwtD6DzFm2w+Y3v5sMGW/ACbA9Rms9ZsCTIApH2QR608GhoUKQJ4xA8P8AKCAP5CwF2JgUPwIlPwCFDj/AMRRYJIHCnL8AZkJ1AfkAcUYGNhBpso7MICUgBQw8H4EEv/B5ssDFYA4mAKYWjANfd+Aai3CYZ9BDoM63RDkdEGQ0zE9h+l9zADCDEIGt2/wQEZEwwVepGhgYEdEFGZUEgYAW05XI3jSsVwAAAAASUVORK5CYII=") no-repeat;
                          background-size: 100%; }
                        .toast_info {
                          background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAALVBMVEUAAAD///////////////////////////////////////////////////////+hSKubAAAADnRSTlMA4CCAwKBAMJBg8NAQUNhWlbcAAAC+SURBVCjPYyASsLfse+1cgOBzyr0DgocXYHwmv4dtCkwZck8UoAJZDydA1C2H8NnexUAYR99BjNF6CtMbtwhM+QUACUUhIMH6BKz14QEgafcYSPDIgSxifMkAE2CYJwAk6gQQAozPgURfA0KAA0T6JSAE2ECm7lNACDC9BhLvGGACIA6GAFyLohBEC9xQqLeeQKwFA4i1EIfBAeNzuNMVhSBOx/AcpvcxAwgzCDEDGTMaGHhhEYWIShN4VBIGAPvRT5YzufhUAAAAAElFTkSuQmCC") no-repeat;
                          background-size: 100%; }
                      
                      @-webkit-keyframes loading {
                        0% {
                          -webkit-transform: rotate3d(0, 0, 1, 0deg);
                          transform: rotate3d(0, 0, 1, 0deg); }
                        100% {
                          -webkit-transform: rotate3d(0, 0, 1, 360deg);
                          transform: rotate3d(0, 0, 1, 360deg); } }
                      
                      @keyframes loading {
                        0% {
                          -webkit-transform: rotate3d(0, 0, 1, 0deg);
                          transform: rotate3d(0, 0, 1, 0deg); }
                        100% {
                          -webkit-transform: rotate3d(0, 0, 1, 360deg);
                          transform: rotate3d(0, 0, 1, 360deg); } }
                      
                `}
                </style>
            </div>
        )
    }
}

export default ToastBox