import { Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import VersionCircle from '@/components/version/VersionCircle'
import { useRouter } from 'next/router'
import FeatureAPI from '@/api/FeatureAPI'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function VersionSelector({
  version,
  onVersionChange,
  onFeaturesLoaded,
  loading,
}) {
  const [versions, setVersions] = useState([
    { id: 11, name: '9.19' },
    { id: 1, name: '9.14' },
    { id: 2, name: '9.13' },
    { id: 3, name: '9.12' },
    { id: 4, name: '9.11' },
    { id: 5, name: '9.10' },
    { id: 6, name: '9.9' },
  ])

  const [selectedVersion, setSelectedVersion] = useState(
    versions.find((v) => v.name === version) || versions[0]
  )

  const router = useRouter()

  useEffect(() => {
    FeatureAPI.features(selectedVersion.name)
      .then(({ data }) => {
        const features = data.data
        onFeaturesLoaded(features)
      })
      .catch((err) => {})

    onVersionChange(selectedVersion.name)
    router.push(`/version/${selectedVersion.name}`)
  }, [selectedVersion])

  return (
    <>
      <VersionCircle loading={loading} versionName={selectedVersion.name} />

      <div className={'mx-auto mt-6 w-48'}>
        <Listbox value={selectedVersion} onChange={setSelectedVersion}>
          {({ open }) => (
            <>
              <div className="relative mt-1 text-left">
                <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 sm:text-sm">
                  <span className="block truncate text-black">
                    {selectedVersion.name}
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <SelectorIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>

                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {versions.map((person) => (
                      <Listbox.Option
                        key={person.id}
                        className={({ active }) =>
                          classNames(
                            active
                              ? 'bg-brand-600 text-white'
                              : 'text-gray-900',
                            'relative cursor-default select-none py-2 pl-3 pr-9'
                          )
                        }
                        value={person}
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={classNames(
                                selected ? 'font-semibold' : 'font-normal',
                                'block truncate'
                              )}
                            >
                              {person.name}
                            </span>

                            {selected ? (
                              <span
                                className={classNames(
                                  active ? 'text-white' : 'text-brand-600',
                                  'absolute inset-y-0 right-0 flex items-center pr-4'
                                )}
                              >
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </>
          )}
        </Listbox>
      </div>
    </>
  )
}
