
export default {
    mounted(el, binding) {
        const _ops = binding.value,
            className = _ops.className,
            activeClass = _ops.activeClass,
            curIdx = _ops.curIdx,
            oNavItems = el.getElementsByClassName(className);
        oNavItems[curIdx].className += ` ${activeClass}`;
        oNavItems[curIdx].style.border = '1px solid grey'
    },


    updated(el, binding) {
        const _oOps = binding.oldValue,
            _ops = binding.value,
            className = _ops.className,
            activeClass = _ops.activeClass,
            oNavItems = el.getElementsByClassName(className);
        oNavItems[_oOps.curIdx].className += `${className}`;
        oNavItems[_ops.curIdx].className += ` ${activeClass}`;
        oNavItems[_oOps.curIdx].style.border = 'unset'
        oNavItems[_ops.curIdx].style.border = '1px solid grey'
    }
}