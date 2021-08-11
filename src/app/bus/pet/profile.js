import React from 'react';

// Hooks
import { useQueryProfile } from './hooks/useQueryProfile';

export const Profile = () => {
  const { getProfile, loading, error, profile } = useQueryProfile();

  const loadProfile = () => {
    getProfile({
      variables: {
        id: 'C-1'
      }
    });
  }

  const loaderJSX = loading && (
    <p>Loading...</p>
  );

  const errorJSX =  error && (
    <p>
      We have a problem: {error.message}
    </p>
  )

  const profileJSX = profile && (
    <p key={profile.id}>
      <span>Name: {profile.name}</span><br/>
    </p>
  );

  return (
    <>
      <h1>Profile: </h1>
      <button onClick={loadProfile}>Download</button>
      {loaderJSX}
      {errorJSX}
      {profileJSX}
    </>
  )
};
