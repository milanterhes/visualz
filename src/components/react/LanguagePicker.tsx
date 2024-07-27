import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

const langs = ['hu', 'de', 'gb'] as const
const langtext = { hu: 'Magyar', gb: 'English', de: 'Deutsch' } as const

interface Props {
    countryCode: string;
    links: { code: string, text: string, link: string }[]
}

const LanguagePicker: React.FC<Props> = ({ countryCode, links }) => {
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <span className={`fi fis fi-${countryCode} fiCircle my-2`}></span>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content className='bg-black'>
                    {links.map(item => item.code != countryCode ? (
                        <DropdownMenu.Item asChild>
                            <a className='p-2 flex gap-2 items-center' href={item.link}>
                                <span className={`fi fis fi-${item.code} fiCircle my-2`}></span>
                                <span>{item.text}</span>
                            </a>
                        </DropdownMenu.Item>
                    ) : null)}
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>

    )
}

export default LanguagePicker