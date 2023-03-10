import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './PlayersStyles.css'
import { getVideoSource } from '../../actions'
import { connect } from 'react-redux'
import NotFound from '../NotFound/NotFound'


const Players = ({playing,getVideoSource }) => {
    const navigate = useNavigate()
    const hasPlaying = Object.keys(playing)?.length > 0
    const { id } = useParams(); 

    useEffect(() => {
        getVideoSource(id)
    })

    return hasPlaying ? (
        <div className='Player'>
            <video controls autoPlay>
                <source src={playing.source} type='video/mp4' />
            </video>
            <div className='Player-back'>
                <button onClick={() => navigate('/')} type='button'>
                    regresar
                </button>
            </div>
        </div>
    ) : <NotFound />
}

const mapStateToProps = (state) => {
    return{
        playing: state.playing
    }
}

const mapDispatchToProps = {
    getVideoSource,
}

export default connect(mapStateToProps,mapDispatchToProps)(Players)