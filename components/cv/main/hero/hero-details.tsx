'use client'
import {motion, Variants} from 'motion/react'

import {ActionButton} from '@/components/cv/atoms/action-button'

import type {CvProfile} from '@/components/cv/types'

import {mainHeadConfig} from './hero.config'

type Props = {
  profile: CvProfile
  variants: Variants
}

export function HeroDetails({profile, variants}: Props) {
  const {icons, contact, urls} = mainHeadConfig

  return (
    <motion.div className="mb-4 flex flex-row flex-wrap gap-2" variants={variants}>
      {profile.contacts?.location && (
        <ActionButton
          href={urls.mapsWarsaw}
          icon={<icons.MapPin />}
          label={profile.contacts.location}
          variant="link"
          size="sm"
          className="text-muted-foreground"
        />
      )}
      {typeof profile.contacts?.relocationReady === 'boolean' && (
        <ActionButton
          icon={<icons.Map className="h-4 w-4" />}
          href={urls.maps}
          size="sm"
          variant="link"
          label={
            profile.contacts.relocationReady
              ? contact.relocation.ready
              : contact.relocation.notReady
          }
          className="text-muted-foreground flex items-center gap-2"
        />
      )}
      {profile.contacts?.typeOfContract && (
        <ActionButton
          href={urls.b2bSearch}
          variant="link"
          size="sm"
          icon={<icons.Banknote className="h-4 w-4" />}
          label={
            Array.isArray(profile.contacts.typeOfContract)
              ? profile.contacts.typeOfContract.join(', ')
              : profile.contacts.typeOfContract
          }
          className="text-muted-foreground flex items-center gap-2"
        />
      )}
    </motion.div>
  )
}
