import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import getCep from '../src/services/viaCepService';
import cepCoorder from 'coordenadas-do-cep'
import dynamic from 'next/dynamic';
import Input from '../src/components/input';
import Head from 'next/head';

const MapWithNoSSR = dynamic(() => import('../src/components/Map/index'), {
  ssr: false,
});

const Home: NextPage = () => {
  const [cep, setCep] = useState('');
  const [loadedCep, setLoadedCep] = useState<Cep>()

  useEffect(() => {
    if (cep.length === 8) {
      (async () => {
        const teste = await cepCoorder.getByCep(cep);
        console.log(teste)
        setLoadedCep(teste);
      })()
    } else {
      setLoadedCep({
        bairro: '',
        complemento: '',
        cep: '',
        ddd: '',
        ibge: '',
        lat: 0,
        lon: 0,
        gia: '',
        localidade: '',
        logradouro: '',
        siafi: '',
        uf: ''
      });
    }
  }, [cep])


  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      height: '100vh',
      padding: '0px',
      margin: '0px'
    }}>
      <Head>
        <title>Busca de CEP</title>
      </Head>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Input value={cep} onChange={(val) => setCep(val)} maxLength={8} name="cep" label='CEP' />
        <Input value={loadedCep?.bairro} disabled name='bairro' label='Bairro' />
        <Input value={loadedCep?.complemento} disabled name='complemento' label='Complemento' />
        <Input value={loadedCep?.ddd} disabled name='ddd' label='DDD' />
        <Input value={loadedCep?.localidade} disabled name='localidade' label='Localidade' />
        <Input value={loadedCep?.logradouro} disabled name='logradouro' label='Logradouro' />
        <Input value={loadedCep?.uf} disabled name='uf' label='UF' />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', width: '90%' }}>
        <MapWithNoSSR coords={loadedCep ? { lat: loadedCep?.lat, lng: loadedCep?.lon } : { lat: 0, lng: 0 }} />
      </div>
    </div>
  )
}

export default Home
