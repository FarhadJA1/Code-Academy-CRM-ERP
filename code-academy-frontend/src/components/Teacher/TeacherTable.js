import React, { useState } from 'react'
import TeacherDelete from './TeacherDelete'
import TeacherEdit from './TeacherEdit'
import TeacherInfo from './TeacherInfo'
import { useTranslation } from 'react-i18next';
import { Pagination } from "react-pagination-bar"
import 'react-pagination-bar/dist/index.css'
import CircularProgress from '@mui/material/CircularProgress';

function TeacherTable(props) {
  let count = 1;
  const { t } = useTranslation();
  
  return (
    <div>
      {(props.search?.length === 0) ?
        (props.teachers?.length > 0) ? <table className="table table-hover">
          <thead>
            <tr>
              <th className='table-header' scope="col">#</th>
              <th className='table-header' scope="col">{t("name")}</th>
              <th className='table-header' scope="col">{t("surname")}</th>
              <th className='table-header' scope="col">{t("profession")}</th>
              <th className='table-header' scope="col">{t("salary")}</th>
              <th className='table-header' scope="col">{t("phone")}</th>
              <th className='table-header' scope="col">{t("settings")}</th>
            </tr>
          </thead>
          <tbody>
            {props.teachers?.slice((props.currentPage - 1) * props.pageLimit, props.currentPage * props.pageLimit).map(teacher => (
              <tr key={teacher?.id}>
                <th className='table-header' scope="row">{count++}</th>
                <td className='table-header' align='center'>{teacher?.name}</td>
                <td className='table-header' align='center'>{teacher?.surname}</td>
                <td className='table-header' align='center'>{teacher?.profession?.name}</td>
                <td className='table-header' align='center'>{teacher?.salary}</td>
                <td className='table-header' align='center'>{teacher?.phone}</td>
                <td className='table-button-area' align='center'>
                  <TeacherInfo
                    teacher={teacher} id={props.id}
                    value={teacher.id} details={props.details} setDetails={props.setDetails}
                    teacherDetails={props.teacherDetails} setId={props.setId}
                  />
                  <TeacherDelete id={props.id} value={teacher.id} setId={props.setId} deleteTeacher={props.deleteTeacher} />
                  <TeacherEdit
                    nameInput={props.nameInput} setNameInput={props.setNameInput}
                    surnameInput={props.surnameInput} setSurnameInput={props.setSurnameInput}
                    birthdayInput={props.birthdayInput} setBirthdayInput={props.setBirthdayInput}
                    emailInput={props.emailInput} setEmailInput={props.setEmailInput}
                    phoneInput={props.phoneInput} setPhoneInput={props.setPhoneInput}
                    salaryInput={props.salaryInput} setSalaryInput={props.setSalaryInput}
                    professionInput={props.professionInput} setProfessionInput={props.setProfessionInput}
                    professions={props.professions}
                    updateTeacher={props.updateTeacher}
                    id={props.id} value={teacher.id} setId={props.setId}
                  />
                </td>
              </tr>
            ))}

          </tbody>
        </table> : <CircularProgress className='circular' color="secondary" /> : <table className="table table-hover">
          <thead>
            <tr>
              <th className='table-header' scope="col">#</th>
              <th className='table-header' scope="col">{t("name")}</th>
              <th className='table-header' scope="col">{t("surname")}</th>
              <th className='table-header' scope="col">{t("profession")}</th>
              <th className='table-header' scope="col">{t("salary")}</th>
              <th className='table-header' scope="col">{t("phone")}</th>
              <th className='table-header' scope="col">{t("settings")}</th>
            </tr>
          </thead>
          <tbody>
            {props.search?.map(teacher => (
              <tr key={teacher.id}>
                <th className='table-header' scope="row">{count++}</th>
                <td className='table-header' align='center'>{teacher?.name}</td>
                <td className='table-header' align='center'>{teacher?.surname}</td>
                <td className='table-header' align='center'>{teacher?.profession?.name}</td>
                <td className='table-header' align='center'>{teacher?.salary}</td>
                <td className='table-header' align='center'>{teacher?.phone}</td>
                <td className='table-button-area' align='center'>
                  <TeacherInfo
                    teacher={teacher} id={props.id}
                    value={teacher.id} details={props.details} setDetails={props.setDetails}
                    teacherDetails={props.teacherDetails} setId={props.setId}
                  />
                  <TeacherDelete id={props.id} value={teacher.id} setId={props.setId} deleteTeacher={props.deleteTeacher} />
                  <TeacherEdit
                    nameInput={props.nameInput} setNameInput={props.setNameInput}
                    surnameInput={props.surnameInput} setSurnameInput={props.setSurnameInput}
                    birthdayInput={props.birthdayInput} setBirthdayInput={props.setBirthdayInput}
                    emailInput={props.emailInput} setEmailInput={props.setEmailInput}
                    phoneInput={props.phoneInput} setPhoneInput={props.setPhoneInput}
                    salaryInput={props.salaryInput} setSalaryInput={props.setSalaryInput}
                    professionInput={props.professionInput} setProfessionInput={props.setProfessionInput}
                    professions={props.professions}
                    updateTeacher={props.updateTeacher}
                    id={props.id} value={teacher.id} setId={props.setId}
                  />
                </td>
              </tr>
            ))}

          </tbody>
        </table>}

      <div className='pagination'>
        <Pagination
          onlyPageNumbers={true}
          initialPage={props.currentPage}
          itemsPerPage={props.pageLimit}
          totalItems={props.total}
          onPageСhange={(pageNumber) => props.setCurrentPage(pageNumber)}
          pageNeighbours={1}

        />
      </div>


    </div>
  )
}

export default TeacherTable
