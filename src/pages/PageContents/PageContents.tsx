import * as React from 'react';

import styles from './PageContent.module.css';
import { RoundedButton, RoundedButtonColor, RoundedButtonSize } from '../../components/Buttons/RoudedButton';
import { Divider } from '../../components/Divider/Divider';
import { Github, ReactIcon, Stackoverflow, Twitter, TypeScriptIcon } from '../../components/Icons/Icons';
import { SizedBox } from '../../components/SizedBox/SizedBox';
import { PageContentSection } from '../../components/PageContentSection/PageContentSection';
import { TextInput } from '../../components/UserInputs/TextInput';
import { TextAreaInput } from '../../components/UserInputs/TextAreaInput';
import { MultiSelectInput, MultiSelectOption } from '../../components/UserInputs/MultiSelectInput';
import { ToggleInputCard } from '../../components/UserInputs/ToggleInputCard';
import { FileInput } from '../../components/UserInputs/FileInput';
import { Layout } from '../../layouts/Layout';
import { FormState, UseFormRegister, UseFormSetValue, UseFormTrigger, useFieldArray, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

export type PageContentsProps = {  };

export type PlatformCard = {
  originalId: number,
  selected: boolean,
};

export const TECHNOLOGIES: MultiSelectOption[] = [
  { value: 'react', label: 'React', id: 1, icon: ReactIcon },
  { value: 'typescript', label: 'TypeScript', id: 2, icon: TypeScriptIcon },
];

// export type PageContentsFormValues = {
//   displayName: string,
//   displayPicture: string,
//   bio: string,
//   city: string,
//   website: string,
//   // TODO: Add Cards and Technologies
// };

const schema = z.object({
  displayName: z.string().min(1, 'Display name is required'),
  displayPicture: z.string().min(1, 'Display picture is required'),
  bio: z.string().min(1, 'Bio is required'),
  city: z.string().min(1, 'City is required'),
  website: z.string().min(1, 'Website is required').url('Should be a valid URL'),
  technologies: z.array(z.custom<MultiSelectOption>()).min(1, 'Technologies is required').max(5, 'Select upto 5 technologies maximum'),
  cards: z.array(z.custom<PlatformCard>()),
});

export type PageContentsFormValues = z.infer<typeof schema>;

export type PageContentFormContextType = {
  register: UseFormRegister<PageContentsFormValues>,
  setValue: UseFormSetValue<PageContentsFormValues>,
  formState: FormState<PageContentsFormValues>,
  trigger: UseFormTrigger<PageContentsFormValues>,
};

export type CardMeta = {
  name: string,
  icon: string,
};

export const PageContentsFormContext = React.createContext<PageContentFormContextType>({} as any);

export function PageContents({  }: PageContentsProps) {

  // TODO: Write a mapper that converts array response from server to a map like below
  const cardsMeta: Record<number, CardMeta> = {
    1: {
      name: 'Twitter',
      icon: '<svg width="30" height="30" viewBox="0 0 38 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M37.75 3.94688C36.3719 4.55729 34.8896 4.96458 33.326 5.15729C34.9156 4.21354 36.1386 2.70833 36.7125 0.930208C35.225 1.80208 33.5771 2.44271 31.824 2.78021C30.424 1.29583 28.4271 0.375 26.2146 0.375C21.9646 0.375 18.5198 3.78958 18.5198 8C18.5198 8.59583 18.5896 9.17604 18.7208 9.73958C12.3271 9.41875 6.65626 6.37917 2.86251 1.76667C2.19585 2.89375 1.82085 4.21354 1.82085 5.60625C1.82085 8.25313 3.17605 10.5833 5.24272 11.9563C3.98126 11.9177 2.79376 11.5667 1.75418 11.0042C1.75418 11.0271 1.75418 11.0615 1.75418 11.0938C1.75418 14.7927 4.4073 17.8729 7.92397 18.574C7.28126 18.75 6.60209 18.8479 5.90209 18.8479C5.40522 18.8479 4.92085 18.7917 4.4521 18.7073C5.43126 21.7302 8.27189 23.9396 11.6375 24.0052C9.00418 26.0469 5.68751 27.2698 2.08126 27.2698C1.45835 27.2698 0.848971 27.2344 0.246887 27.1615C3.65418 29.3188 7.70001 30.5833 12.0427 30.5833C26.1938 30.5833 33.9354 18.9625 33.9354 8.88125C33.9354 8.55104 33.925 8.22188 33.9094 7.89688C35.4198 6.83021 36.7219 5.48438 37.75 3.94688Z" fill="#03A9F4"/></svg>',
    },
    2: {
      name: 'Stackoverflow',
      icon: '<svg width="30" height="30" viewBox="0 0 105 124" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M88 79.8081H99V123.808H0V79.8081H11V112.808H88V79.8081Z" fill="#BBBBBB"/><path d="M22.9879 76.538L77.0129 87.893L79.2839 77.093L25.2589 65.733L22.9879 76.538ZM30.1369 50.669L80.1829 73.977L84.8449 63.968L34.7979 40.66L30.1369 50.669ZM43.9849 26.116L86.4129 61.447L93.4789 52.962L51.0509 17.632L43.9849 26.116ZM71.3719 0L62.5119 6.59L95.4599 50.89L104.32 44.301L71.3719 0ZM22 101.808H77V90.808H22V101.808Z" fill="#F58025"/></svg>',
    },
    3: {
      name: 'Github',
      icon: '<svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 0C8.955 0 0 8.955 0 20C0 29.3717 6.45333 37.2133 15.1533 39.3833C15.06 39.1133 15 38.8 15 38.4117V34.9933C14.1883 34.9933 12.8283 34.9933 12.4867 34.9933C11.1183 34.9933 9.90167 34.405 9.31167 33.3117C8.65667 32.0967 8.54333 30.2383 6.92 29.1017C6.43833 28.7233 6.805 28.2917 7.36 28.35C8.385 28.64 9.235 29.3433 10.035 30.3867C10.8317 31.4317 11.2067 31.6683 12.695 31.6683C13.4167 31.6683 14.4967 31.6267 15.5133 31.4667C16.06 30.0783 17.005 28.8 18.16 28.1967C11.5 27.5117 8.32167 24.1983 8.32167 19.7C8.32167 17.7633 9.14667 15.89 10.5483 14.3117C10.0883 12.745 9.51 9.55 10.725 8.33333C13.7217 8.33333 15.5333 10.2767 15.9683 10.8017C17.4617 10.29 19.1017 10 20.825 10C22.5517 10 24.1983 10.29 25.695 10.805C26.125 10.2833 27.9383 8.33333 30.9417 8.33333C32.1617 9.55167 31.5767 12.76 31.1117 14.3233C32.505 15.8983 33.325 17.7667 33.325 19.7C33.325 24.195 30.1517 27.5067 23.5017 28.195C25.3317 29.15 26.6667 31.8333 26.6667 33.855V38.4117C26.6667 38.585 26.6283 38.71 26.6083 38.8583C34.4017 36.1267 40 28.7267 40 20C40 8.955 31.045 0 20 0Z" fill="#E5E5E5"/></svg>',
    }
  };

  const cardsInitialValue = [
    {
      originalId: 1,
      selected: true,
    },
    {
      originalId: 2,
      selected: false,
    },
    {
      originalId: 3,
      selected: true,
    }
  ];

  const { handleSubmit, control, register, setValue, formState, trigger, getValues } = useForm<PageContentsFormValues>({
    defaultValues: {
      displayName: '',
      displayPicture: '',
      bio: '',
      city: '',
      website: '',
      technologies: [],
      cards: [...cardsInitialValue],
    },
    resolver: zodResolver(schema),
  });

  // TODO: Move the cards as a separate component
  const { fields, update } = useFieldArray({
    control,
    name: 'cards'
  });

  const fileInputRef = React.createRef<HTMLInputElement>();

  const onSubmit = (data: PageContentsFormValues) => {
    console.log(data);
    console.log(typeof data.displayPicture)
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const currentValues = getValues();

    // ? NOTE: For some reason file input is not scrolled into view automatically if invalid
    if(!(currentValues.displayPicture)) {
      window.scrollTo({top: fileInputRef.current?.clientTop, behavior: 'smooth'})
    }

    const submitCaller = handleSubmit(onSubmit);
    submitCaller(e);
  }

  const socialCards = fields.map((field) => (
    <ToggleInputCard
      key={field.id}
      id={field.originalId}
      icon={cardsMeta[field.originalId].icon}
      name={cardsMeta[field.originalId].name}
      isSelected={field.selected}
      onChange={(id, isSelected) => {
        const index = fields.findIndex(field => field.originalId == id);

        if(index !== -1) {
          update(index, {
            ...fields[index],
            selected: isSelected,
          });
        }
      }}
    />
  ));
  
  return (
    <Layout isLogoCenter>
      <div className={styles.page}>
        <div className={styles['page-title-container']}>
            <h1>Page Contents</h1>
        </div>

        <PageContentsFormContext.Provider value={{register, setValue, formState, trigger}}>
          <form className={styles['form']} onSubmit={submitHandler}>
            <PageContentSection title='General'>
              <TextInput
                label='Display Name'
                placeHolder='Type out or click autofill'
                control={control}
                name='displayName'
                rules={{required: true}}
              />
              <Divider />

              <FileInput
                ref={fileInputRef}
                control={control}
                name='displayPicture'
                label='Display picture'
                placeHolder='Click to select a picture or autofill'
                rules={{required: {message: 'Required', value: true}}}
              />
              <Divider />

              <TextAreaInput
                control={control}
                name='bio'
                label='Bio'
                placeHolder='Type out or click autofill'
              />
              <Divider />

              <TextInput
                label='City'
                placeHolder='Type out'
                control={control}
                name='city'
              />
              <Divider />

              <TextInput
                label='Website'
                placeHolder='Type out'
                control={control}
                name='website'
              />
              <Divider />

            </PageContentSection>

            <PageContentSection title='Cards'>
              <div className={styles['cards-container']}>
                { socialCards }
              </div>
            </PageContentSection>

            <Divider />

            <PageContentSection title='Technologies' subtitle='Select upto 5'>
              <MultiSelectInput control={control} name='technologies' label='' placeHolder='Type to search' options={TECHNOLOGIES} />
            </PageContentSection>

            <Divider />

            <div className={styles['save-button-container']}>
              <RoundedButton backgroundColor={RoundedButtonColor.GREEN} size={RoundedButtonSize.MEDIUM}>Save</RoundedButton>
            </div>
          </form>
        </PageContentsFormContext.Provider>
        <SizedBox width='auto' height={50} />
      </div>
    </Layout>
  );
}