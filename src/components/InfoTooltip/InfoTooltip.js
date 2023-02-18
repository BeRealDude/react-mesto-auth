 import unionOk from '../../images/UnionOk.svg'
 import unionNo from '../../images/UnionNo.svg'

 function InfoTooltip() {
    // const {onClose} = props
    return (
      <div className='popup'>
        <div className="popup__container_tooltip">
          <img
          className="popup__union"
          src={unionOk ? unionOk : unionNo}
          alt={''}
          />
          <h3 className="popup__heading">
            {unionOk ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.'}
          </h3>
          <button
            className="popup__close"
            type="button"
            // onClick={onClose}
          />
        </div>
      </div>
    );
  };

  export default InfoTooltip;